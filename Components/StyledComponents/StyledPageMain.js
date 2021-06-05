import styled from "@emotion/styled";
import { motion } from "framer-motion";
import appTheme from "../../styles/appTheme";

// Framer Motion Div
const StyledPageMain = styled(motion.main)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${appTheme.globalMaxWidth};
  min-height: 100%;
  font-weight: bold;
  text-align: justify;
`;

export default StyledPageMain;
