import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  color: var(--color-1);
  background-color: var(--color-4);
  border-radius: 1rem;

  div:nth-of-type(1) {
    color: var(--color-1);
    text-transform: uppercase;
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

const EditAuthorForm = ({
  name,
  born,
  setBorn,
  handleSubmit,
  setDisplayAuthorForm,
}) => {
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>{name}</div>
        <div>
          Born :
          <input
            type="number"
            min="-3000"
            max="2100"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <div>
          <button type="submit">Edit</button>
          <button type="button" onClick={() => setDisplayAuthorForm(false)}>
            Hide
          </button>
        </div>
      </StyledForm>
    </>
  );
};

export default EditAuthorForm;
