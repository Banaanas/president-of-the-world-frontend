import FormPage from "../Components/Form/FormPage";
import LoginIllustration from "../Components/Illustrations/LoginIllustration";
import UpdateCandidateForm from "../Components/UpdateCandidatePage/UpdateCandidateForm";

const UpdateCandidate = () => {
  return (
    <FormPage
      pageHeading="My Candidate"
      illustrationComponent={<LoginIllustration />}
      formComponent={<UpdateCandidateForm />}
    />
  );
};

export default UpdateCandidate;
