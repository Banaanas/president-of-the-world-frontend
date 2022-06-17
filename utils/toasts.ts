import { ApolloError } from "@apollo/client";
import { UseToastOptions } from "@chakra-ui/react";

const toastsDuration = 5000;

interface Toasts {
  signup: UseToastOptions;
  login: UseToastOptions;
  logout: UseToastOptions;
  candidateSubmitted: UseToastOptions;
  candidateUpdated: UseToastOptions;
  candidateDeleted: UseToastOptions;
  vote: UseToastOptions;
  errorCredentials: UseToastOptions;
  error: (e: ApolloError) => UseToastOptions;
}

// Object of Chakra Toast Objects
const toasts: Toasts = {
  signup: {
    title: "🌠 Account Created ✨",
    description: "You successfully created your Account.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  login: {
    title: "🙂 Login Successful 🏠",
    description: "You are connected to the Application.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  logout: {
    title: "👋🏽 Logout Successful 🤟🏽",
    description: "You are not connected to the Application anymore.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  candidateSubmitted: {
    title: "🙂 Candidate Submitted 🌠",
    description: "People can now vote for your Candidate.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  candidateUpdated: {
    title: "🙂 Candidate Updated 🌠",
    description: "Your Candidate has been successfully updated.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  candidateDeleted: {
    title: "✔️ Candidate Deleted ❎",
    description: "Your Candidate will no longer appear.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  vote: {
    title: "🗳️ Successful Vote 🌠",
    description: "One more Vote for this candidate.",
    status: "success",
    duration: toastsDuration,
    isClosable: true,
  },
  errorCredentials: {
    title: "Wrong Credentials",
    description: "Invalid Username or Password",
    status: "error",
    duration: toastsDuration,
    isClosable: true,
  },
  error: (e) => ({
    title: "❌ Something Wrong Happened ⚠️",
    description: e.message,
    status: "error",
    duration: toastsDuration,
    isClosable: true,
  }),
};

export default toasts;
