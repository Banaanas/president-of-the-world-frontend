import FormPage from "../../Form/FormPage";
import CandidateProfileIllustration from "../../Illustrations/CandidateProfileIllustration";
import CandidateProfile from "./CandidateProfile";
import SubmitCandidateIllustration from "../../Illustrations/SubmitCandidateIllustration";
import SubmitCandidateForm from "./SubmitCandidateForm";
import { LoggedInUserData } from "../../../types/types";

const MyCandidate = ({ loggedInUser }: LoggedInUserData) => {
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

  // If loggedInUser does NOT HAVE Candidate
  return (
    <FormPage
      pageHeading="My Candidate"
      subHeading="Please, chose the Candidate you want."
      illustrationComponent={<SubmitCandidateIllustration />}
      formComponent={<SubmitCandidateForm />}
    />
  );
};

export default MyCandidate;
