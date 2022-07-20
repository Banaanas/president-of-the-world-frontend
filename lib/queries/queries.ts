import { gql } from "@apollo/client";

// FRAGMENT

const CANDIDATE_DETAILS = gql`
  fragment CandidateDetails on Candidate {
    lastName
    firstName
    country
    politicalOrientation
    votes
    id
  }
`;

// QUERIES

const LOGGED_IN_USER = gql`
  ${CANDIDATE_DETAILS}
  query {
    loggedInUser {
      username
      id
      candidate {
        ...CandidateDetails
      }
    }
  }
`;

const ALL_CANDIDATES = gql`
  ${CANDIDATE_DETAILS}
  query {
    allCandidates {
      ...CandidateDetails
    }
  }
`;

const ALL_CANDIDATES_COUNT = gql`
  query {
    allCandidatesCount
  }
`;

// MUTATIONS

const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    createUser(
      username: $username
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      username
      id
    }
  }
`;

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

const ADD_CANDIDATE = gql`
  ${CANDIDATE_DETAILS}

  mutation (
    $candidateLastName: String!
    $candidateFirstName: String!
    $country: String!
    $politicalOrientation: String!
  ) {
    addCandidate(
      candidateLastName: $candidateLastName
      candidateFirstName: $candidateFirstName
      country: $country
      politicalOrientation: $politicalOrientation
    ) {
      ...CandidateDetails
    }
  }
`;
const UPDATE_CANDIDATE = gql`
  ${CANDIDATE_DETAILS}

  mutation ($id: ID!, $country: String!, $politicalOrientation: String!) {
    updateCandidate(
      id: $id
      country: $country
      politicalOrientation: $politicalOrientation
    ) {
      ...CandidateDetails
    }
  }
`;

const VOTE_CANDIDATE = gql`
  ${CANDIDATE_DETAILS}

  mutation ($id: ID!) {
    voteCandidate(id: $id) {
      ...CandidateDetails
    }
  }
`;

const DELETE_CANDIDATE = gql`
  mutation ($id: ID!) {
    deleteCandidate(id: $id) {
      username
      id
    }
  }
`;

// TESTING PURPOSE - E2E
const RESET_ALL_DOCUMENTS = gql`
  mutation {
    resetAllDocuments
  }
`;

export {
  ADD_CANDIDATE,
  ALL_CANDIDATES,
  ALL_CANDIDATES_COUNT,
  CREATE_USER,
  DELETE_CANDIDATE,
  LOGGED_IN_USER,
  LOGIN,
  RESET_ALL_DOCUMENTS,
  UPDATE_CANDIDATE,
  VOTE_CANDIDATE,
};
