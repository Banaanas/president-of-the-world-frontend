import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import Loader from "react-loader-spinner";
import Notification from "../Components/Notification";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledTitle from "../Components/StyledTitle";
import { ADD_BOOK, LOGGED_IN_USER } from "../lib/queries/queries";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1rem;
  padding: 1rem;
  color: var(--color-1);
  background-color: var(--color-4);
  border-radius: 1rem;

  input {
    min-width: 10rem;
    max-width: 15rem;
    margin-left: 1rem;
  }

  button {
    color: var(--color-3);
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--color-2);
    border-radius: 3px;
    cursor: pointer;
    transition: transform 250ms ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }
`;

const AddBookForm = () => {
  const [title, setTitle] = useState("Prose - 1");
  const [authorName, setAuthorName] = useState("Flaubert");
  const [genre, setGenre] = useState("Poésie");
  const [date, setDate] = useState("1900");
  const [country, setCountry] = useState("France");
  const [errorMessage, setErrorMessage] = useState(null);

  // ADD_BOOK Mutation
  const [addBook] = useMutation(ADD_BOOK, {
    onError: (error) => {
      setErrorMessage(error.graphQLErrors[0]?.message);
      setTimeout(() => setErrorMessage(null), 5000);
    },
  });

  // Next Router
  const router = useRouter();

  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
  );

  // if NOT authenticated, Redirect
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = (event) => {
    event.preventDefault();

    addBook({
      variables: { title, genre, authorName, date, country },
    });

    setTitle("");
    setAuthorName("");
    setGenre("");
    setDate("");
    setCountry("");
  };

  // Loader Spinner Rendering
  if (!isAuthenticated) {
    return (
      <StyledPageMain>
        <Loader type="Puff" color="white" height={100} width={100} />
      </StyledPageMain>
    );
  }

  // If isAuthenticated, Return LoginForm
  return (
    <StyledPageMain>
      <Notification errorMessage={errorMessage} />
      <StyledTitle>Add Book</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          Title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Genre
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
        </div>
        <div>
          Author
          <input
            value={authorName}
            onChange={({ target }) => setAuthorName(target.value)}
          />
        </div>
        <div>
          Date
          <input
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <div>
          Country
          <input
            value={country}
            onChange={({ target }) => setCountry(target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </StyledForm>
    </StyledPageMain>
  );
};

export default AddBookForm;
