//  Test function that declares tests and expect function to write assertions.
import { test, expect } from '@playwright/test';

test('Register new user', async ({ page }) => {
  // Username and Passwored declared for easier reusability during testing
  const username = `test${parseInt(Math.random()*10000)}@tesingz.com`;
  const password = "RandomPassword321";
    
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByLabel('Consent', { exact: true }).click();
  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill("Random name");
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('TestUser02');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill(username);
  await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);
  await page.getByRole('textbox', { name: 'Password*', exact: true }).press('Tab');
  await page.getByLabel('Confirm Password').fill(password);
  await page.getByRole('button', { name: 'Create an Account' }).click();
});
