/* The GQL queries in the queries.ts file aren't retrievable. So, we had to "hardcode" the queries we wanted to use in our tests */

export const resetAllDocumentsQuery = `
  mutation {
    resetAllDocuments
  }
`;

export const createUserQuery = (
  username: string,
  password: string,
  passwordConfirmation: string,
) => `mutation {
  createUser(
    username: "${username}"
    password: "${password}"
    passwordConfirmation: "${passwordConfirmation}"
  ) {
    username
    candidate {
      lastName
      firstName
      country
      politicalOrientation
      votes
      id
    }
    id
  }
}`;
