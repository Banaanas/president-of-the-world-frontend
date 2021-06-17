import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { object, ref, string } from "yup";
import { localStorageValue } from "../../../lib/apolloClient";
import { getAuthenticatedUser } from "../../../store/slices/authenticationSlice";
import FormHeading from "../../Form/FormHeading";
import {
  ChakraErrorMessage,
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  StyledFormikForm,
  SubmitButton,
} from "../../Form/StyledFormComponents";
import { CREATE_USER, LOGIN } from "../../../lib/queries/queries";
import toasts from "../../../utils/toasts";

// Form Validation Schema - Yup
const ValidationSchemaYup = object().shape({
  username: string()
    .min(5, "Username must be at least 5 characters long")
    .max(15, "Username can't exceed 15 characters")
    .required("Username is Required"),
  password: string()
    .min(5, "Password must be at least 5 characters long")
    .max(15, "Password can't exceed 10 characters")
    .required("Password is Required"),
  passwordConfirmation: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Password Confirmation is Required"),
});

const SignUpForm = () => {
  // Normally, useState is not used with Formik (values).
  // But after the Sign Up process, username and password
  // were needed to complete the Login process, during the
  // createUser - useMutation - onCompleted step.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useDispatch - Redux State
  const dispatch = useDispatch();

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  // Login is used here, just after the Sign Up Process
  const [login, resultLogin] = useMutation(LOGIN, {
    onCompleted: () => {
      // Display Success Toast
      toast(toasts.login);
    },
    onError: () => {
      // Display Error Toast
      // Should NOT be displayed, because the password is supposed to be the
      // exact same one as the one used of the Sign Up Process, so no Error
      // should occur.
      toast(toasts.errorCredentials);
    },
  });

  // createUser - useMutation
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: async () => {
      // Display Success Toast
      toast(toasts.signup);

      // login - useMutation with username and password states
      await login({ variables: { username, password } });
    },
    onError: (error) => {
      // Display Error Toast
      toast(toasts.error(error));
    },
  });

  // If Logged In User
  useEffect(() => {
    // If Login works
    if (resultLogin.data) {
      // Retrieve token from GraphQL mutation
      const token = resultLogin.data.login.value;
      // Set localStorage
      localStorage.setItem(localStorageValue, token);
      // Get Authenticated User - Dispatch - Redux State
      dispatch(getAuthenticatedUser(resultLogin.data));
    }
  }, [resultLogin.data]);

  // Create User - Function
  const handleCreateUser = async (newUser) => {
    // createUser - useMutation
    await createUser({
      variables: {
        username: newUser.username,
        password: newUser.password,
        passwordConfirmation: newUser.passwordConfirmation,
      },
    });
  };

  const formikInitialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    /* By default Formik validates after Change, Blur and Submit events */
    <Formik
      initialValues={formikInitialValues}
      validationSchema={ValidationSchemaYup}
      validateOnMount /* Boolean - Run (also) validation when Formik Component mounts - This way, Submit is disabled on mount */
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Update username and password state in order to use them during the
        //  during the createUser - useMutation - onCompleted step, when
        // Login useMutation is used.
        setUsername(values.username);
        setPassword(values.password);

        // Create User
        handleCreateUser(values);
        setSubmitting(false); // Set Submitting to false - Submit Chakra UI Button (isLoading)
        resetForm(formikInitialValues); // Reset Form Initial Values
      }}
    >
      {({ isValid, errors, touched, isSubmitting }) => (
        <StyledFormikForm>
          <FormHeading
            heading="Create your Account"
            subHeading="Already have an account ?"
            linkText="Sign In"
            link="/login"
          />
          <Field name="username">
            {({ field }) => (
              <ChakraFormControl
                isRequired
                isInvalid={errors.username && touched.username}
              >
                <ChakraLabel htmlFor="username">Username</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="text"
                  id="username"
                  placeholder="Buddha"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.username && touched.username ? (
                  <ChakraErrorMessage>{errors.username}</ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <Field name="password">
            {({ field }) => (
              <ChakraFormControl
                isRequired
                isInvalid={errors.password && touched.password}
              >
                <ChakraLabel htmlFor="password">Password</ChakraLabel>
                <ChakraInput
                  {...field}
                  type="password"
                  id="password"
                  placeholder="********"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.password && touched.password ? (
                  <ChakraErrorMessage>{errors.password}</ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <Field name="passwordConfirmation">
            {({ field }) => (
              <ChakraFormControl
                isRequired
                isInvalid={
                  errors.passwordConfirmation && touched.passwordConfirmation
                }
              >
                <ChakraLabel htmlFor="passwordConfirmation">
                  Password Confirmation
                </ChakraLabel>
                <ChakraInput
                  {...field}
                  type="password"
                  id="passwordConfirmation"
                  placeholder="********"
                />
                {/* If this field has been touched, and it contains an error,
                display it */}
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ChakraErrorMessage>
                    {errors.passwordConfirmation}
                  </ChakraErrorMessage>
                ) : null}
              </ChakraFormControl>
            )}
          </Field>
          <SubmitButton type="submit">SIGN UP</SubmitButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
