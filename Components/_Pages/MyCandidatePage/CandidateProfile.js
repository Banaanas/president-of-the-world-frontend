import Link from "next/link";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import {
  formHeadingStyle,
  formStyle,
  submitButtonStyle,
} from "../../../styles/css-composition";
import appTheme from "../../../styles/appTheme";
import { LOGGED_IN_USER } from "../../../lib/queries/queries";
import DetailContainer from "../../Form/DetailsContainer";
import DeleteAlertDialog from "./DeleteAlertDialog";
import { ButtonsContainer } from "../../Form/StyledFormComponents";

const ProfileContainer = styled.div`
  ${formStyle}
`;

const ProfileHeading = styled.div`
  ${formHeadingStyle}
`;

const marginButtons = "6px";

const UpdateLink = styled.a`
  ${submitButtonStyle};
`;

const DeleteButton = styled(UpdateLink)`
  ${submitButtonStyle};

  margin-left: ${marginButtons};
  background-color: ${appTheme.colors.error.default};
`;

const CandidateProfile = ({ loggedInUser }) => {
  // DeleteAlertDialog - Chakra UI
  const [isOpen, setIsOpen] = useState(false);
  const onCloseAlertDialog = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <ProfileContainer>
      <ProfileHeading>Profile Details</ProfileHeading>
      <DetailContainer>
        <div>Last Name</div>
        <div> {loggedInUser?.candidate?.lastName}</div>
      </DetailContainer>
      <DetailContainer>
        <div>First Name</div>
        <div> {loggedInUser?.candidate?.firstName}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Country</div>
        <div> {loggedInUser?.candidate?.country}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Political Orientation</div>
        <div> {loggedInUser?.candidate?.politicalOrientation}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Votes</div>
        <div> {loggedInUser?.candidate?.votes}</div>
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
        candidateID={loggedInUser?.candidate?.id}
      />
    </ProfileContainer>
  );
};

export default CandidateProfile;
