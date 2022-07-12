const SEO: SEOProps = {
  index: {
    title: "President of the World",
    description:
      "Submit your Candidate and Vote for the President of the World.",
  },
  login: {
    title: "President of the World | Login",
    description:
      "Log In to President of the World and submit your own Candidate.",
  },
  signUp: {
    title: "President of the World | Sign Up",
    description:
      "Sign Up to President of the World and submit your own Candidate.",
  },
  myCandidate: {
    title: "President of the World | My Candidate",
    description: "Submit your Candidate to be elected President of the World.",
  },
  updateCandidate: {
    title: "President of the World | Update Candidate",
    description: "Update your Candidate to be elected President of the World.",
  },
  page404: {
    title: "President of the World | 404 - Not Found",
  },
  page500: {
    title: "President of the World | 500 - Not Found",
  },
};

export default SEO;

interface ObjectSEO {
  title: string;
  description?: string;
}

interface SEOProps {
  index: ObjectSEO;
  login: ObjectSEO;
  signUp: ObjectSEO;
  myCandidate: ObjectSEO;
  updateCandidate: ObjectSEO;
  page404: ObjectSEO;
  page500: ObjectSEO;
}
