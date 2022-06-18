import styled from "@emotion/styled";

import appTheme from "../../styles/appTheme";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & div:nth-of-type(2) {
    align-self: flex-end;
    padding: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: ${appTheme.colors.tertiary.light};
    border-radius: 4px;
  }
`;

export default DetailContainer;
