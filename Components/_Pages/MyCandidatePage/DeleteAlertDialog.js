import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";
import { DELETE_CANDIDATE, LOGGED_IN_USER } from "../../../lib/queries/queries";

const StyledAlertDialogContent = styled(AlertDialogContent)`
  width: calc(${appTheme.globalMinWidth} - 20px);
  color: ${appTheme.colors.secondary.default};

  @media ${appTheme.queries.tabletAndUp} {
    width: ${appTheme.globalMinWidth};
  }
`;

const StyledAlertDialogHeader = styled(AlertDialogHeader)`
  font-weight: ${appTheme.fontWeight.bold};
  font-size: ${appTheme.fontSize.xl};
  text-align: center;
`;

const DeleteAlertDialog = ({
  isOpen,
  onCloseAlertDialog,
  cancelRef,
  candidateID,
}) => {
  // Chakra-UI Toast
  const toast = useToast();

  // Delete - useMutation
  const [deleteCandidate, resultDeleteCandidate] = useMutation(
    DELETE_CANDIDATE,
    {
      refetchQueries: [{ query: LOGGED_IN_USER }],
      onCompleted: () => {
        // Display Success Toast
        toast({
          title: "✔️ Candidate Deleted ❎",
          description: "Your Candidate will no longer appear.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        // Close Alert Dialog
        onCloseAlertDialog();
      },
      onError: (error) => {
        // Display Error Toast
        toast({
          title: "❌ Something Wrong Happened ⚠️",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );

  const handleDeleteCandidate = async (id) => {
    // Delete Blog - useMutation
    await deleteCandidate({ variables: { id } });
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onCloseAlertDialog={onCloseAlertDialog}
      isCentered
    >
      <AlertDialogOverlay>
        <StyledAlertDialogContent>
          <StyledAlertDialogHeader>Delete Candidate</StyledAlertDialogHeader>

          <AlertDialogBody color={appTheme.colors.secondary.default}>
            Do you really want to delete your Candidate ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onCloseAlertDialog}
              color={appTheme.colors.secondary.default}
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleDeleteCandidate(candidateID)}
              background={appTheme.colors.error.default}
              color={appTheme.colors.textDefault}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </StyledAlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteAlertDialog;
