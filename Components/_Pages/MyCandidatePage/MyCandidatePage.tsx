import Loader from "react-loader-spinner";
import FormPage from "../../Form/FormPage";
import CandidateProfileIllustration from "../../Illustrations/CandidateProfileIllustration";
import CandidateProfile from "./CandidateProfile";
import SubmitCandidateIllustration from "../../Illustrations/SubmitCandidateIllustration";
import SubmitCandidateForm from "./SubmitCandidateForm";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import { LoggedInUserData, LoggedInUserObject } from "../../../types/types";

const MyCandidate = ({ loggedInUser }: LoggedInUserData) => {
  // If loggedInUser
  if (loggedInUser) {
    const hasCandidate = loggedInUser?.candidate;

    // If loggedInUser already HAS Candidate
    if (hasCandidate) {
      return (
        <FormPage
          pageHeading="My Candidate"
          illustrationComponent={<CandidateProfileIllustration />}
          formComponent={<CandidateProfile loggedInUser={loggedInUser} />}
          rowReverse
        />
      );
    }

    // If loggedInUser already does NOT HAVE Candidate
    if (!hasCandidate) {
      return (
        <FormPage
          pageHeading="My Candidate"
          subHeading="Please, chose the Candidate you want."
          illustrationComponent={<SubmitCandidateIllustration />}
          formComponent={<SubmitCandidateForm />}
        />
      );
    }
  }

  // If NO loggedInUser, Loading Spinner
  return (
    <StyledPageMain>
      <Loader type="Puff" color="white" height={100} width={100} />
    </StyledPageMain>
  );
};

export default MyCandidate;
