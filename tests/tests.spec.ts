import { expect, test } from "@playwright/test";
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResponse } from "apollo-language-server/lib/engine/GraphQLDataSource";

import {
  createUserQuery,
  fakeUser,
  resetAllDocumentsQuery,
} from "./tests.helpers";

// URL of FrontEnd LocalHost
const localHostURL = "http://localhost:3000";

// URL of Backend server on local environment
const endpointURL = "http://localhost:3002";

// Generate fake User
const { username, password } = fakeUser;

/** * BEFORE EACH ** */
test.beforeEach(async ({ page, request }) => {
  // Delete all Users and Users' Candidates in Testing Database
  const resetAllDocuments = await request.post(endpointURL, {
    data: {
      query: resetAllDocumentsQuery,
    },
  });

  // Check if resetAllDocuments query has been made
  expect(resetAllDocuments.ok()).toBeTruthy();
  expect(resetAllDocuments.status()).toBe(200);

  // The Problem is that GraphQL always returns a http 200 Status Code, even if it throws an Error.
  // GraphQL returns a 200 status code response, with an "errors" property within, if there is an error.
  // That's why we want this "errors" property NOT to be defined in the responseJSON.
  // This way, the tests stop here, and no User is created in dev/prod DB.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const responseJSON: GraphQLResponse<{ data: null }> =
    await resetAllDocuments.json();
  expect(responseJSON.errors).not.toBeDefined();

  // Create User - API Request
  const newUser = await request.post(endpointURL, {
    data: {
      query: createUserQuery(username, password, password),
    },
  });
  // Check if User has been created
  expect(newUser.ok()).toBeTruthy();
  expect(newUser.status()).toBe(200);

  // Go to LoginPage
  await page.goto(`${localHostURL}/login`);
});

/** * LOGIN / LOGOUT ** */
test.describe("LOGIN / LOGOUT", () => {
  test("should login and redirect to homepage", async ({ page }) => {
    // Fill username and password inputs
    await page.locator("input[type='text']").fill(username);
    await page.locator("input[type='password']").fill(password);

    // Click Login button
    await page.locator("text=Login").click();

    // Wait for navigation change
    await page.waitForURL(localHostURL);
    // Expect redirection to homepage
    await expect(page).toHaveURL(localHostURL);

    // Successful Login Toast should be displayed
    const successfulLoginToast = page.locator("div[role='alert']");
    await expect(successfulLoginToast).toHaveText(
      "🙂 Login Successful 🏠You are connected to the Application.",
    );
  });

  test("Login fails with wrong credentials", async ({ page }) => {
    // Fill username and password inputs with WRONG PASSWORD
    await page.locator("input[type='text']").fill(username);
    await page.locator("input[type='password']").fill("wrong-password");

    // Click Login button
    await page.locator("text=Login").click();

    // Wrong Credential Toast should be displayed
    const wrongCredentialToast = page.locator("div[role='alert']");
    await expect(wrongCredentialToast).toHaveText(
      "❌ Something Wrong Happened ⚠️Wrong Password",
    );

    // Expect NO redirection to homepage
    await expect(page).toHaveURL(`${localHostURL}/login`);
  });

  test("If Logout succeeds", async ({ page }) => {
    // Fill username and password inputs
    await page.locator("input[type='text']").fill(username);
    await page.locator("input[type='password']").fill(password);

    // Click Login button
    await page.locator("text=Login").click();

    // Wait for navigation change
    await page.waitForURL(localHostURL);
    // Click My Candidate Page link
    await page.locator("text=Logout").click();

    // Logout Toast should be displayed
    const logoutToast = page.locator(":nth-match(div[role='alert'], 2)");
    await expect(logoutToast).toHaveText(
      "👋🏽 Logout Successful 🤟🏽You are not connected to the Application anymore.",
    );
  });
});

/** * APP FUNCTIONALITIES ** */
test.describe("APP FUNCTIONALITIES", () => {
  // BEFORE EACH TEST, log in the User and Create a Candidate
  test.beforeEach(async ({ page }) => {
    // CONNECT TO THE APPLICATION
    // Fill username and password inputs
    await page.locator("input[type='text']").fill(username);
    await page.locator("input[type='password']").fill(password);

    // Click Login button
    await page.locator("text=Login").click();
    // Wait for navigation change
    await page.waitForURL(localHostURL);
    // Click My Candidate Page link
    await page.locator("text=My Candidate").click();
    // Wait for navigation change
    await page.waitForURL(`${localHostURL}/my-candidate`);
  });

  test("User can add a candidate", async ({ page }) => {
    // CREATE CANDIDATE
    // Fill Candidate's lastname
    await page.locator("input[name='lastName']").click();
    await page.locator("input[name='lastName']").fill("Blue");
    // Fill Candidate's firstname
    await page.locator("input[name='firstName']").click();
    await page.locator("input[name='firstName']").fill("Banana");
    // Fill Candidate's country
    await page.locator("input[name='country']").click();
    await page.locator("input[name='country']").fill("India");
    // Fill Candidate's political orientation
    await page.locator("text=Left").click();
    // Submit Candidate's form
    await page.locator("text=Submit").click();

    // Added Candidate Toast should be displayed
    const addedCandidateToast = page.locator(
      ":nth-match(div[role='alert'], 2)",
    );
    await expect(addedCandidateToast).toHaveText(
      "🙂 Candidate Submitted 🌠People can now vote for your Candidate.",
    );

    // UPDATE CANDIDATE
    // Visit MyCandidate Page
    await page.goto(`${localHostURL}/my-candidate`);
    // Click Update Button
    await page.locator("text=Update").click();
    // Update Candidate's elements
    await page.locator("input[name='country']").click();
    await page.locator("input[name='country']").fill("Venezuela");
    await page.locator("text=Center").click();
    await page.locator("text=SUBMIT").click();

    // Updated Candidate Toast should be displayed
    const updatedCandidateToast = page.locator("div[role='alert']");
    await expect(updatedCandidateToast).toHaveText(
      "🙂 Candidate Updated 🌠Your Candidate has been successfully updated.",
    );

    // DELETE CANDIDATE
    // Visit MyCandidate Page
    await page.goto(`${localHostURL}/my-candidate`);
    // Click Delete Button
    await page.locator("text=Delete").click();
    await page
      .locator('section[role="alertdialog"] button:has-text("Delete")')
      .click();

    // Deleted Candidate Toast should be displayed
    const deletedCandidateToast = page.locator("div[role='alert']");
    await expect(deletedCandidateToast).toHaveText(
      "✔️ Candidate Deleted ❎Your Candidate will no longer appear.",
    );
  });
  test("User can add a candidate", async ({ page }) => {
    // DELETE CANDIDATE
    // Visit MyCandidate Page
    await page.goto(`${localHostURL}/my-candidate`);
    // Click Delete Button
    await page.locator("text=Delete").click();
    await page
      .locator('section[role="alertdialog"] button:has-text("Delete")')
      .click();
  });
});
