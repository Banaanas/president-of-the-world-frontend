import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  color: var(--color-6);
  font-weight: bolder;
  text-transform: uppercase;
  background-color: var(--color-1);
  border-radius: 3px;
  transform: scale(1);
  cursor: pointer;
  transition: transform 350ms ease;

  :hover {
    transform: scale(1.1);
  }
`;

export default StyledButton;
