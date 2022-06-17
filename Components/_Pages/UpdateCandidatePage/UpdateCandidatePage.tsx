import { LoggedInUserData } from "../../../types/types";
import FormPage from "../../Form/FormPage";
import UpdateCandidateIllustration from "../../Illustrations/UpdateCandidateIllustration";
import UpdateCandidateForm from "./UpdateCandidateForm";

const UpdateCandidatePage = ({ loggedInUser }: LoggedInUserData) => {
  return (
    <FormPage
      pageHeading="My Candidate"
      subHeading="My Candidate"
      illustrationComponent={<UpdateCandidateIllustration horizontalFlip />}
      formComponent={<UpdateCandidateForm loggedInUser={loggedInUser} />}
    />
  );
};

export default UpdateCandidatePage;
