import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
  max-width: 90%;
  padding: 1rem;
  color: var(--color-2);
  background-color: var(--color-3);
`;

const Notification = () => {
  // notificationMessage - Redux State
  const notificationMessage = useSelector(
    (state) => state.notification.notificationContent,
  );

  // If NO notificationMessage, Return Null
  if (notificationMessage === null) return null;

  // If notificationMessage
  return <StyledDiv>{notificationMessage}</StyledDiv>;
};

export default Notification;
