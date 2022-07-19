import { test } from "@playwright/test";
import { createUserQuery } from "./tests.helpers";

test("sample", async ({ request }) => {
  const newUser = await request.post("http://localhost:3002/", {
    data: {
      query: createUserQuery("ZOBAINO", "dummyPassword", "dummyPassword"),
    },
  });

  const jsonResponse = await newUser;

  console.log("AHGAHAHAHA", jsonResponse);

  /*
    const deleteDocuments = await request.post("http://localhost:3002/", {
      data: {
        query: resetAllDocumentsQuery,
      },
    });
  */

  /*   const newRequest = await request.post("http://localhost:3002/", {
    data: {
      query: `{
  allCandidates(candidateLastName: "Chavez") {
    lastName
  }
}`,
    },
  }); */

  // expect(newRequest.ok()).toBeTruthy();

  /* const newRequest = await request.post(`/`, {
    data: {
      query: ALL_CANDIDATES,
    },
  });

  expect(newRequest.ok()).toBeTruthy();

  console.log(newRequest); */
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
