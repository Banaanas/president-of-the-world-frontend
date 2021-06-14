import Loader from "react-loader-spinner";
import FormPage from "../../Form/FormPage";
import CandidateProfileIllustration from "../../Illustrations/CandidateProfileIllustration";
import CandidateProfile from "./CandidateProfile";
import SubmitCandidateIllustration from "../../Illustrations/SubmitCandidateIllustration";
import SubmitCandidateForm from "./SubmitCandidateForm";
import StyledPageMain from "../../StyledComponents/StyledPageMain";

const MyCandidate = ({ loggedInUser }) => {
  if (loggedInUser) {
    const hasCandidate = loggedInUser?.candidate;

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

  // Loading Spinner
  return (
    <StyledPageMain>
      <Loader type="Puff" color="white" height={100} width={100} />
    </StyledPageMain>
  );
};

export default MyCandidate;
