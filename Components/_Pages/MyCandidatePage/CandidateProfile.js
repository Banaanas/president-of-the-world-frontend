import Link from "next/link";
import styled from "@emotion/styled";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import {
  formHeadingStyle,
  formStyle,
  submitButtonStyle,
} from "../../../styles/css-composition";
import appTheme from "../../../styles/appTheme";
import { DELETE_CANDIDATE, LOGGED_IN_USER } from "../../../lib/queries/queries";
import DetailContainer from "../../Form/DetailsContainer";
import { useRef, useState } from "react";
import DeleteAlertDialog from "./DeleteAlertDialog";

const ProfileContainer = styled.div`
  ${formStyle}
`;

const ProfileHeading = styled.div`
  ${formHeadingStyle}
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const marginButtons = "2px";

const UpdateLink = styled.a`
  ${submitButtonStyle};
  margin-right: ${marginButtons};
`;

const DeleteButton = styled(UpdateLink)`
  ${submitButtonStyle};
  margin-left: ${marginButtons};
  background-color: ${appTheme.colors.error.default};
`;

const CandidateProfile = () => {
  const { data, error, loading } = useQuery(LOGGED_IN_USER);

  const [isOpen, setIsOpen] = useState(false);
  const onCloseAlertDialog = () => setIsOpen(false);
  const cancelRef = useRef();

  const handleDeleteCandidate = async (id) => {
    // Delete Blog - useMutation
    await deleteCandidate({ variables: { id } });
  };

  return (
    <ProfileContainer>
      <ProfileHeading>Profile Details</ProfileHeading>
      <DetailContainer>
        <div>Last Name</div>
        <div> {data?.loggedInUser?.candidate?.lastName}</div>
      </DetailContainer>
      <DetailContainer>
        <div>First Name</div>
        <div> {data?.loggedInUser?.candidate?.firstName}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Country</div>
        <div> {data?.loggedInUser?.candidate?.country}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Political Orientation</div>
        <div> {data?.loggedInUser?.candidate?.politicalOrientation}</div>
      </DetailContainer>
      <ButtonsContainer>
        <Link href="/update-candidate">
          <UpdateLink>Update</UpdateLink>
        </Link>
        <DeleteButton onClick={() => setIsOpen(true)}>Delete</DeleteButton>
      </ButtonsContainer>
      <DeleteAlertDialog
        isOpen={isOpen}
        cancelRef={cancelRef}
        onCloseAlertDialog={onCloseAlertDialog}
        candidateID={data?.loggedInUser?.candidate?.id}
      />
    </ProfileContainer>
  );
};

export default CandidateProfile;

/*  onClick={() =>
            handleDeleteCandidate(data?.loggedInUser?.candidate?.id)
          }*/
