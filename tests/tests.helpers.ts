import { faker } from "@faker-js/faker";

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

/** CREATE USER HELPERS * */

// Get random number between two INT
const randomNumberFromInterval = (min: number, max: number): number => {
  // Min and max are included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Password length must be between 5 and 15
const randomPasswordLength = (): number => randomNumberFromInterval(5, 15);

const generateFakeUSer = () => {
  return {
    username: faker.name.findName().substring(0, 10), // substring in order for the username to NOT exceed 10 characters
    password: faker.internet.password(randomPasswordLength()),
  };
};

export const fakeUser = generateFakeUSer();
