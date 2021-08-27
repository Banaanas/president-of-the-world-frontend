import Loader from "react-loader-spinner";
import FormPage from "../../Form/FormPage";
import UpdateCandidateIllustration from "../../Illustrations/UpdateCandidateIllustration";
import UpdateCandidateForm from "./UpdateCandidateForm";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import { LoggedInUserData } from "../../../types/types";

const UpdateCandidatePage = ({ loggedInUser }: LoggedInUserData) => {
  if (loggedInUser) {
    return (
      <FormPage
        pageHeading="My Candidate"
        subHeading="My Candidate"
        illustrationComponent={<UpdateCandidateIllustration horizontalFlip />}
        formComponent={<UpdateCandidateForm loggedInUser={loggedInUser} />}
      />
    );
  }

  // if ALREADY authenticated, Loader Spinner Rendering
  return (
    <StyledPageMain>
      <Loader type="Puff" color="white" height={100} width={100} />
    </StyledPageMain>
  );
};

export default UpdateCandidatePage;
