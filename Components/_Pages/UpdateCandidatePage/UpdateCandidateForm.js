import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { HStack, Radio, RadioGroup, useToast } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { object, string } from "yup";
import styled from "@emotion/styled";
import Link from "next/link";
import FormHeading from "../../Form/FormHeading";
import {
  ButtonsContainer,
  ChakraErrorMessage,
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  StyledFormikForm,
} from "../../Form/StyledFormComponents";
import { LOGGED_IN_USER, UPDATE_CANDIDATE } from "../../../lib/queries/queries";
import DetailContainer from "../../Form/DetailsContainer";
import { submitButtonStyle } from "../../../styles/css-composition";
import appTheme from "../../../styles/appTheme";

const marginButtons = "6px";

const UpdateButton = styled.button`
  ${submitButtonStyle};
`;

const CancelLink = styled.a`
  ${submitButtonStyle};

  margin-left: ${marginButtons};
  background-color: ${appTheme.colors.error.default};
`;

/* The Select Tag is Rendered by Formik with an "as='select'" prop.
The HTML Select element can not have DIV for children. That is why
ChakraFormControl and ChakraErrorMessage have NOT been used for the Select Tag.
Its styling needs to be harmonized with ChakraFormControl. */
const SelectField = styled(Field)`
  width: 100%;
  background: white;
  border: ${appTheme.colors.secondary.lighter} 1px solid;
  border-radius: 0.375rem; /* = Chakra Input Styling */
  padding-inline-start: 1rem; /* = Chakra Input Styling */
  cursor: pointer;

  &:focus {
    border-color: ${appTheme.colors.tertiary.default};
    box-shadow: 0 0 0 1px ${appTheme.colors.tertiary.default};
  }
`;

// Form Validation Schema - Yup
const ValidationSchemaYup = object().shape({
  country: string()
    .min(5, "Country must be at least 5 characters long")
    .max(15, "Country can't exceed 10 characters")
    .required("Country is Required"),
  politicalOrientation: string().required("Political Orientation is Required"),
});

const MyCandidateForm = () => {
  // Next Router
  const router = useRouter();

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [updateCandidate, resultUpdateCandidate] = useMutation(
    UPDATE_CANDIDATE,
    {
      onCompleted: () => {
        // Display Success Toast
        toast({
          title: "🙂 Candidate Updated 🌠",
          description: "Your Candidate has been successfully updated.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Redirect to Home
        router.push("/");
      },
      onError: (error) => {
        // Display Error Toast
        toast({
          title: "❌ Something Wrong Happened ⚠️",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    },
  );

  // Update Candidate - Function
  const handleUpdateCandidate = async (updatedCandidate) => {

    // updateCandidate - useMutation
    await updateCandidate({
      variables: {
        id: data?.loggedInUser?.candidate?.id,
        country: updatedCandidate.country,
        politicalOrientation: updatedCandidate.politicalOrientation,
      },
    });
  };

  const { data, error, loading } = useQuery(LOGGED_IN_USER);

  const formikInitialValues = {
    country: "Colombia",
    politicalOrientation: "Left",
  };

  return (
    /* By default Formik validates after Change, Blur and Submit events */
    <Formik
      initialValues={formikInitialValues}
      validationSchema={ValidationSchemaYup}
      validateOnMount /* Boolean - Run (also) validation when Formik Component mounts - This way, Submit is disabled on mount */
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Update Candidate
        handleUpdateCandidate(values);
        setSubmitting(false); // Set Submitting to false - Submit Chakra UI Button (isLoading)
      }}
    >
      {({ isValid, errors, touched, isSubmitting }) => (
        <StyledFormikForm>
          <FormHeading heading="Update your Candidate" />

          <DetailContainer>
            <div>Last Name</div>
            <div> {data?.loggedInUser?.candidate?.lastName}</div>
          </DetailContainer>
          <DetailContainer>
            <div>First Name</div>
            <div> {data?.loggedInUser?.candidate?.firstName}</div>
          </DetailContainer>

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
          <Field name="politicalOrientation">
            {({ field }) => {
              const { onChange, ...rest } = field;
              return (
                <ChakraFormControl
                  id="politicalOrientation"
                  isInvalid={
                    errors.politicalOrientation && touched.politicalOrientation
                  }
                >
                  <ChakraLabel htmlFor="politicalOrientation">
                    Political Orientation
                  </ChakraLabel>
                  <RadioGroup
                    id="politicalOrientation"
                    {...rest}
                    defaultValue="Left"
                  >
                    <HStack spacing="24px">
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
          <ButtonsContainer>
            <UpdateButton type="submit">SUBMIT</UpdateButton>
            <Link href="/my-candidate">
              <CancelLink>CANCEL</CancelLink>
            </Link>
          </ButtonsContainer>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

export default MyCandidateForm;