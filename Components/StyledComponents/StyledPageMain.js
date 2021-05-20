import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledPageMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 128px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${appTheme.globalMaxWidth};
  min-height: 100%;
  font-weight: bold;
  text-align: justify;
`;

export default StyledPageMain;
