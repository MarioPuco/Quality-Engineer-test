import { test, expect } from '@playwright/test';

test('Login-logout Test', async ({ page }) => {
    // Open the URL
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByLabel('Consent', { exact: true }).click();
  // Click on the "Sign In" link
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  // Fill in the User info and Sign In
  await page.getByLabel('Email', { exact: true }).fill('test-user@testing.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('!Mirko12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  // Sign Out from the Page
  await page.getByRole('banner').getByText('Welcome, Mario FirstTest!').click();
  await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await page.goto('https://magento.softwaretestingboard.com/');
});
