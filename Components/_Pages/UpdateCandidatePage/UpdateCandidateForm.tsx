import { useMutation } from "@apollo/client";
import {
  HStack,
  InputProps,
  Radio,
  RadioGroup,
  RadioProps,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Field, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { object, string } from "yup";

import navLinks from "../../../data/navLinks";
import { UPDATE_CANDIDATE } from "../../../lib/queries/queries";
import appTheme from "../../../styles/appTheme";
import { submitButtonStyle } from "../../../styles/css-composition";
import { Candidate, LoggedInUserData } from "../../../types/types";
import toasts from "../../../utils/toasts";
import DetailContainer from "../../Form/DetailsContainer";
import FormHeading from "../../Form/FormHeading";
import {
  ButtonsContainer,
  ChakraErrorMessage,
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  StyledFormikForm,
} from "../../Form/StyledFormComponents";

const marginButtons = "6px";

const UpdateButton = styled.button`
  ${submitButtonStyle};
`;

const CancelLink = styled.a`
  ${submitButtonStyle};

  margin-left: ${marginButtons};
  background-color: ${appTheme.colors.error.default};
`;

// Form Validation Schema - Yup
const ValidationSchemaYup = object().shape({
  country: string()
    .min(5, "Country must be at least 5 characters long")
    .max(15, "Country can't exceed 10 characters")
    .required("Country is Required"),
  politicalOrientation: string().required("Political Orientation is Required"),
});

type InitialFormValues = {
  country: string | undefined;
  politicalOrientation: string | undefined;
};

const MyCandidateForm = ({ loggedInUser }: LoggedInUserData) => {
  // Next Router
  const router = useRouter();

  // Chakra-UI Toast
  const toast = useToast();

  // Update Candidate - useMutation
  const [updateCandidate] = useMutation<Candidate>(UPDATE_CANDIDATE, {
    onCompleted: () => {
      // Display Success Toast
      toast(toasts.candidateUpdated);

      // Redirect to Home
      // eslint-disable-next-line no-void
      void router.push("/");
    },
    onError: (error) => {
      // Display Error Toast
      toast(toasts.error(error));
    },
  });

  // Update Candidate - Function
  const handleUpdateCandidate = async (updatedCandidate: InitialFormValues) => {
    // updateCandidate - useMutation
    await updateCandidate({
      variables: {
        id: loggedInUser?.candidate?.id,
        country: updatedCandidate.country,
        politicalOrientation: updatedCandidate.politicalOrientation,
      },
    });
  };

  const formikInitialValues: InitialFormValues = {
    country: loggedInUser?.candidate?.country,
    politicalOrientation: loggedInUser?.candidate?.politicalOrientation,
  };

  return (
    /* By default Formik validates after Change, Blur and Submit events */
    <Formik
      initialValues={formikInitialValues}
      validationSchema={ValidationSchemaYup}
      validateOnMount /* Boolean - Run (also) validation when Formik Component mounts - This way, Submit is disabled on mount */
      onSubmit={(values, { setSubmitting }) => {
        // Update Candidate
        // eslint-disable-next-line no-void
        void handleUpdateCandidate(values);
        setSubmitting(false); // Set Submitting to false - Submit Chakra UI Button (isLoading)
      }}
    >
      {({ errors, touched }) => (
        <StyledFormikForm>
          <FormHeading heading="Update your Candidate" />

          <DetailContainer>
            <div>Last Name</div>
            <div> {loggedInUser?.candidate?.lastName}</div>
          </DetailContainer>
          <DetailContainer>
            <div>First Name</div>
            <div> {loggedInUser?.candidate?.firstName}</div>
          </DetailContainer>

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
          <ButtonsContainer>
            <UpdateButton type="submit">SUBMIT</UpdateButton>
            <Link href={navLinks.myCandidate.href} passHref>
              <CancelLink>CANCEL</CancelLink>
            </Link>
          </ButtonsContainer>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

export default MyCandidateForm;
