import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { FaEdit as EditIcon } from "react-icons/fa";
import EditAuthorForm from "./EditAuthorForm";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../lib/queries/queries";
import StyledTitle from "./StyledTitle";
import store from "../store/store";
import {
  displayNotification,
  hideNotification,
} from "../store/slices/notificationSlice";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-5);
  border-radius: 1rem;

  /* Edit Icon */
  svg {
    margin-left: 1rem;
    color: var(--color-3);
    cursor: pointer;
  }
`;

const StyledTableHead = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  color: var(--color-3);
  text-transform: uppercase;
  background-color: var(--color-2);
  border-radius: 3px;
`;

const StyledAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  color: var(--color-1);
  text-transform: uppercase;

  ul {
    color: var(--color-2);
    text-transform: capitalize;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: anywhere;
`;

const AuthorsList = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [authorID, setAuthorID] = useState("");
  const [displayAuthorForm, setDisplayAuthorForm] = useState(false);

  // EDIT_AUTHOR Mutation
  const [editAuthor] = useMutation(EDIT_AUTHOR);

  // ALL_AUTHORS Query
  const {
    data: dataAA,
    loading: loadingAA,
    error: errorAA,
  } = useQuery(ALL_AUTHORS, {
    pollInterval: 2000,
    onError: (error) => {
      // Display Notification - Dispatch - Redux State
      store.dispatch(displayNotification(error.graphQLErrors[0].message));
      // Reset Notification - Dispatch - Redux State
      setTimeout(() => store.dispatch(hideNotification()), 5000);
    },
  });

  const handleEditClick = (name, born, id) => {
    // Display Edit LoginForm
    setDisplayAuthorForm(true);

    // Set State
    setName(name);
    setBorn(born === null ? "" : born);
    setAuthorID(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editAuthor({
      variables: { name, born, id: authorID },
    });

    // Reinitialize Inputs
    setName("");
    setBorn("");
    setAuthorID("");
    setDisplayAuthorForm(false);
  };

  // Rendering
  if (loadingAA) return <div>Loading</div>;
  if (errorAA) return <div>Big Mistake</div>;

  return (
    <>
      <StyledTitle>Authors</StyledTitle>
      <StyledContainer>
        <StyledColumn>
          {dataAA.allAuthors.map((author, index) => (
            <StyledAuthorContainer key={`${index + 10}-${author.name}`}>
              <StyledTableHead>{author.name}</StyledTableHead>
              <ul>
                <li>
                  Born : {author.born === null ? "Update" : author.born}
                  <EditIcon
                    onClick={() =>
                      handleEditClick(author.name, author.born, author.id)
                    }
                  />
                </li>
                <li>Books in Library : {author.bookCount}</li>
              </ul>
            </StyledAuthorContainer>
          ))}
        </StyledColumn>
      </StyledContainer>
      {displayAuthorForm ? (
        <>
          <EditAuthorForm
            name={name}
            born={born}
            handleSubmit={handleSubmit}
            setBorn={setBorn}
            setName={setName}
            setDisplayAuthorForm={setDisplayAuthorForm}
          />
        </>
      ) : null}
    </>
  );
};

export default AuthorsList;
