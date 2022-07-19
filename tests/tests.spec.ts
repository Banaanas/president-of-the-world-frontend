import { test, expect } from "@playwright/test";
import { createUserQuery } from "./tests.helpers";

// URL of Backend server on local environment
const endpointURL = "http://localhost:3002/";

test("Create new User", async ({ request }) => {
  const newUser = await request.post(endpointURL, {
    data: {
      query: createUserQuery("DUMMY NAME", "dummyPassword", "dummyPassword"),
    },
  });

  expect(newUser.ok()).toBeTruthy();
  expect(newUser.status()).toBe(200);
});

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
