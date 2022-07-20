import { expect, test } from "@playwright/test";
import { createUserQuery, fakeUser, resetAllDocumentsQuery } from "./tests.helpers";

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

/* test.describe("LOGIN / LOGOUT", () => {
  test("Login Form is displayed", async ({ page }) => {

  });
}); */
/*

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
*/
