import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledTitle from "../Components/StyledTitle";
import { ALL_BOOKS } from "../lib/queries/queries";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-5);
  border-radius: 1rem;
`;

const StyledBookContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  color: var(--color-1);
  text-transform: uppercase;
`;

const Books = () => {
  const { data: dataAB, loading: loadingAB, error: errorAB } = useQuery(
    ALL_BOOKS,
    {
      pollInterval: 2000,
    },
  );

  // Rendering
  if (loadingAB) return <div>Loading</div>;
  if (errorAB) return <div>Big Mistake</div>;

  return (
    <StyledPageMain>
      <StyledTitle>Books</StyledTitle>
      <StyledContainer>
        {dataAB.allBooks.map(({ title, author, date, id }, index) => (
          <StyledBookContainer key={`${id + index}`}>
            <div>{title}</div>
            <div>{author}</div>
            <div>{date}</div>
          </StyledBookContainer>
        ))}
      </StyledContainer>
    </StyledPageMain>
  );
};

/* Return the apolloClient with data, add it to the Apollo Cache.
 * Then the Component retrieve data from the cache with a query
 * https://github.com/vercel/next.js/tree/canary/examples/with-apollo */
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BOOKS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Books;
