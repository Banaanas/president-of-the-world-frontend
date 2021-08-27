import { useMutation } from "@apollo/client";
import {
  HStack,
  InputProps,
  Radio,
  RadioGroup,
  RadioProps,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik, FormikFormProps, FormikProps } from "formik";
import { object, string } from "yup";
import FormHeading from "../../Form/FormHeading";
import {
  ChakraErrorMessage,
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  StyledFormikForm,
  SubmitButton,
} from "../../Form/StyledFormComponents";
import { ADD_CANDIDATE, LOGGED_IN_USER } from "../../../lib/queries/queries";
import toasts from "../../../utils/toasts";
import { CreatedCandidate } from "../../../types/types";

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

interface FormValues {
  lastName: string;
  firstName: string;
  country: string;
  politicalOrientation: string;
}

const SubmitCandidateForm = () => {
  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [createCandidate] = useMutation(ADD_CANDIDATE, {
    refetchQueries: [{ query: LOGGED_IN_USER }],
    onCompleted: () => {
      // Display Success Toast
      toast(toasts.candidateSubmitted);

      // Redirect to Home
      // router.push("/");
    },
    onError: (error) => {
      // Display Error Toast
      toast(toasts.error(error));
    },
  });

  // Create Candidate - Function
  const handleCreateCandidate = async (newCandidate: CreatedCandidate) => {
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

  const formikInitialValues: FormValues = {
    lastName: "",
    firstName: "",
    country: "",
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
        // eslint-disable-next-line no-void
        void handleCreateCandidate(values);
        setSubmitting(false); // Set Submitting to false - Submit Chakra UI Button (isLoading)
        resetForm(); // Reset Form Initial Values
      }}
    >
      {({ errors, touched }) => (
        <StyledFormikForm>
          <FormHeading heading="Chose a Candidate" />
          <Field name="lastName">
            {({ field }: { field: InputProps }) => (
              <ChakraFormControl
                isInvalid={Boolean(errors.lastName && touched.lastName)}
              >
                <ChakraLabel htmlFor="lastName">Last Name</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="text"
                  id="lastName"
                  placeholder="Gandhi"
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
            {({ field }: { field: InputProps }) => (
              <ChakraFormControl
                isInvalid={Boolean(errors.firstName && touched.firstName)}
              >
                <ChakraLabel htmlFor="firstName">First Name</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="text"
                  id="firstName"
                  placeholder="Mahatma"
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
            {({ field }: { field: InputProps }) => (
              <ChakraFormControl
                isInvalid={Boolean(errors.country && touched.country)}
              >
                <ChakraLabel htmlFor="country">Country</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="text"
                  id="country"
                  placeholder="India"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.country && touched.country ? (
                  <ChakraErrorMessage>{errors.country}</ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <Field name="politicalOrientation">
            {({ field }: { field: RadioProps }) => {
              const { onChange, ...rest } = field;
              return (
                <ChakraFormControl
                  id="politicalOrientation"
                  isInvalid={Boolean(
                    errors.politicalOrientation && touched.politicalOrientation,
                  )}
                >
                  <ChakraLabel htmlFor="politicalOrientation">
                    Political Orientation
                  </ChakraLabel>
                  <RadioGroup
                    id="politicalOrientation"
                    {...rest}
                    defaultValue="Left"
                  >
                    <HStack justifyContent="center" spacing="24px">
                      <Radio onChange={onChange} value="Left">
                        Left
                      </Radio>
                      <Radio onChange={onChange} value="Center">
                        Center
                      </Radio>
                      <Radio onChange={onChange} value="Right">
                        Right
                      </Radio>
                    </HStack>
                  </RadioGroup>
                  {/* If this field has been touched, and it contains an error,
                  display it */}
                  {errors.politicalOrientation &&
                  touched.politicalOrientation ? (
                    <ChakraErrorMessage>
                      {errors.politicalOrientation}
                    </ChakraErrorMessage>
                  ) : null}
                </ChakraFormControl>
              );
            }}
          </Field>

          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

export default SubmitCandidateForm;
