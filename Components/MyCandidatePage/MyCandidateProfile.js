import Link from "next/link";
import styled from "@emotion/styled";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import {
  formHeadingStyle,
  formStyle,
  submitButtonStyle,
} from "../../styles/css-composition";
import appTheme from "../../styles/appTheme";
import { DELETE_CANDIDATE, LOGGED_IN_USER } from "../../lib/queries/queries";
import DetailContainer from "../Form/DetailsContainer";

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

const MyCandidateProfile = () => {
  const { data, error, loading } = useQuery(LOGGED_IN_USER);

  // Chakra-UI Toast
  const toast = useToast();

  // Delete - useMutation
  const [deleteCandidate, resultDeleteCandidate] = useMutation(
    DELETE_CANDIDATE,
    {
      onCompleted: () => {
        // Display Success Toast
        toast({
          title: "🙂 Candidate Deleted 🏠",
          description: "You are connected to the Application.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      },
      onError: () => {
        // Display Error Toast
        toast({
          title: "Wrong Credentials",
          description: "Invalid Username or Password",
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
        <DeleteButton
          onClick={() =>
            handleDeleteCandidate(data?.loggedInUser?.candidate?.id)
          }
        >
          Delete
        </DeleteButton>
      </ButtonsContainer>
    </ProfileContainer>
  );
};

export default MyCandidateProfile;
