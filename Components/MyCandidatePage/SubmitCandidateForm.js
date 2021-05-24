import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { object, string } from "yup";
import FormHeading from "../Form/FormHeading";
import {
  ChakraErrorMessage,
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  StyledFormikForm,
  SubmitButton,
} from "../Form/StyledFormComponents";
import { ADD_CANDIDATE } from "../../lib/queries/queries";

// Form Validation Schema - Yup
const ValidationSchemaYup = object().shape({
  lastName: string()
    .min(3, "Last Name must be at least 3 characters long")
    .max(15, "Last Name can't exceed 15 characters")
    .required("Last Name is Required"),
  firstName: string()
    .min(3, "First Name must be at least 3 characters long")
    .max(15, "First Name can't exceed 15 characters")
    .required("First Name is Required"),
  country: string()
    .min(4, "Country must be at least 4 characters long")
    .max(15, "Country can't exceed 15 characters")
    .required("Country is Required"),
  politicalOrientation: string().required("Political Orientation is Required"),
});

const SubmitCandidateForm = () => {
  // Next Router
  const router = useRouter();

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [createCandidate, resultCreateCandidate] = useMutation(ADD_CANDIDATE, {
    onCompleted: () => {
      // Display Success Toast
      toast({
        title: "🙂 Candidate Submitted 🌠",
        description: "People can now vote for your Candidate.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      // Redirect to Home
      router.push("/");
    },
    onError: (error) => {
      // Display Error Toast
      // Should NOT be displayed, because the password is supposed to be the
      // exact same one as the one used of the Sign Up Process, so no Error
      // should occur.
      toast({
        title: "😓 Something Wrong Happened 🔥",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  // Create Candidate - Function
  const handleCreateCandidate = async (newCandidate) => {
    // createCandidate - useMutation
    await createCandidate({
      variables: {
        candidateLastName: newCandidate.lastName,
        candidateFirstName: newCandidate.firstName,
        country: newCandidate.country,
        politicalOrientation: newCandidate.politicalOrientation,
      },
    });
  };

  const formikInitialValues = {
    lastName: "Chavez",
    firstName: "Hugo",
    country: "Venezuela",
    politicalOrientation: "",
  };

  return (
    /* By default Formik validates after Change, Blur and Submit events */
    <Formik
      initialValues={formikInitialValues}
      validationSchema={ValidationSchemaYup}
      validateOnMount /* Boolean - Run (also) validation when Formik Component mounts - This way, Submit is disabled on mount */
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Create Candidate
        handleCreateCandidate(values);
        setSubmitting(false); // Set Submitting to false - Submit Chakra UI Button (isLoading)
        resetForm(formikInitialValues); // Reset Form Initial Values
      }}
    >
      {({ isValid, errors, touched, isSubmitting }) => (
        <StyledFormikForm>
          <FormHeading heading="Chose a Candidate" />
          <Field name="lastName">
            {({ field }) => (
              <ChakraFormControl
                isInvalid={errors.lastName && touched.lastName}
              >
                <ChakraLabel htmlFor="lastName">Last Name</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="text"
                  id="lastName"
                  placeholder="Chávez"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.lastName && touched.lastName ? (
                  <ChakraErrorMessage>{errors.lastName}</ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <Field name="firstName">
            {({ field }) => (
              <ChakraFormControl
                isInvalid={errors.firstName && touched.firstName}
              >
                <ChakraLabel htmlFor="firstName">First Name</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="text"
                  id="firstName"
                  placeholder="Hugo"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.firstName && touched.firstName ? (
                  <ChakraErrorMessage>{errors.firstName}</ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <Field name="country">
            {({ field }) => (
              <ChakraFormControl isInvalid={errors.country && touched.country}>
                <ChakraLabel htmlFor="country">Country</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="country"
                  id="country"
                  placeholder="Venezuela"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.country && touched.country ? (
                  <ChakraErrorMessage>{errors.country}</ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <ChakraLabel htmlFor="politicalOrientation">
            Political Orientation
          </ChakraLabel>
          {/* The Select Tag is Rendered by Formik with an "as='select'" prop.
          The HTML Select element can not have DIV for children. That is why
          ChakraFormControl and ChakraErrorMessage have NOT been used here. */}
          <Field as="select" name="politicalOrientation">
            <option value="">-- Choose an Option --</option>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </Field>
          {errors.politicalOrientation && touched.politicalOrientation ? (
            <div>{errors.politicalOrientation}</div>
          ) : null}
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

export default SubmitCandidateForm;
