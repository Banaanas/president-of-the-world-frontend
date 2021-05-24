import FormPage from "../Components/Form/FormPage";
import UpdateCandidateForm from "../Components/_Pages/UpdateCandidatePage/UpdateCandidateForm";
import UpdateCandidateIllustration from "../Components/Illustrations/UpdateCandidateIllustration";

const UpdateCandidate = () => {
  return (
    <FormPage
      pageHeading="My Candidate"
      illustrationComponent={<UpdateCandidateIllustration />}
      formComponent={<UpdateCandidateForm />}
      rowReverse
    />
  );
};

export default UpdateCandidate;
