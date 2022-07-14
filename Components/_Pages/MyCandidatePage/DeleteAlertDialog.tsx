import { useMutation } from "@apollo/client";
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
import styled from "@emotion/styled";
import React, { RefObject } from "react";

import { DELETE_CANDIDATE, LOGGED_IN_USER } from "../../../lib/queries/queries";
import appTheme from "../../../styles/appTheme";
import toasts from "../../../utils/toasts";

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

interface DeleteAlertDialogProps {
  isOpen: boolean;
  onCloseAlertDialog: () => void;
  cancelRef: RefObject<HTMLButtonElement>;
  candidateID: string | undefined;
}
const DeleteAlertDialog = ({
  isOpen,
  onCloseAlertDialog,
  cancelRef,
  candidateID,
}: DeleteAlertDialogProps) => {
  // Chakra-UI Toast
  const toast = useToast();

  // Delete - useMutation
  const [deleteCandidate] = useMutation(DELETE_CANDIDATE, {
    refetchQueries: [{ query: LOGGED_IN_USER }],
    onCompleted: () => {
      // Display Success Toast
      toast(toasts.candidateDeleted);

      // Close Alert Dialog
      onCloseAlertDialog();
    },
    onError: (error) => {
      // Display Error Toast
      toast(toasts.error(error));
    },
  });

  const handleDeleteCandidate = async (id: string | undefined) => {
    // Delete Blog - useMutation
    await deleteCandidate({ variables: { id } });
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onCloseAlertDialog}
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
              /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
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
