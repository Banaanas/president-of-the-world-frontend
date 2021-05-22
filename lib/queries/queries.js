import { gql } from "@apollo/client";

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
      value
    }
  }
`;

const LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      username
      id
      candidate {
        lastName
        firstName
        country
        politicalOrientation
        votes
        id
      }
    }
  }
`;

const ALL_CANDIDATES = gql`
  query {
    allCandidates {
      lastName
      firstName
      country
      politicalOrientation
      votes
      id
    }
  }
`;

const ALL_CANDIDATES_COUNT = gql`
  query {
    allCandidatesCount
  }
`;

const ADD_CANDIDATE = gql`
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
      lastName
      firstName
      country
      politicalOrientation
      votes
      id
    }
  }
`;
const UPDATE_CANDIDATE = gql`
  mutation ($id: ID!) {
    updateCandidate(id: $id) {
      lastName
      firstName
      country
      politicalOrientation
      votes
      id
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

export {
  CREATE_USER,
  LOGIN,
  LOGGED_IN_USER,
  ALL_CANDIDATES,
  ALL_CANDIDATES_COUNT,
  ADD_CANDIDATE,
  UPDATE_CANDIDATE,
  DELETE_CANDIDATE,
};
