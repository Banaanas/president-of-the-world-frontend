import { expect, test } from "@playwright/test";

import {
  createUserQuery,
  fakeUser,
  resetAllDocumentsQuery,
} from "./tests.helpers";

// URL of Backend server on local environment
const endpointURL = "http://localhost:3002/";

test.beforeEach(async ({ page, request }) => {
  // Delete all Users and Users' Candidates in Testing Database
  await request.post(endpointURL, {
    data: {
      query: resetAllDocumentsQuery,
    },
  });

  // Create User - API Request
  const { username, password } = fakeUser;
  const newUser = await request.post(endpointURL, {
    data: {
      query: createUserQuery(username, password, password),
    },
  });

  // Check if API Call worked
  expect(newUser.ok()).toBeTruthy();
  expect(newUser.status()).toBe(200);

  // Visit LoginPage
  page.goto("http://localhost:3000/login");
});
