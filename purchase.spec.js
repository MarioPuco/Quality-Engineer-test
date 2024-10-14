//  Test function that declares tests and expect function to write assertions.
import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
  const username = "test-user2@testing.com"; 
  const password = "!Mirko12345";
  // Runs before each test and signs in each page.
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByLabel('Consent', { exact: true }).click();
  // Click on the "Sign In" link
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  // Fill in the User info and Sign In
  await page.getByLabel('Email', { exact: true }).fill(username);
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('Purchase an item via Add to Chart', async ({ page }) => {
      // Open the page.
      await page.goto('https://magento.softwaretestingboard.com/');
      // Consent pop-up is present while using codegen but not while running tests
      await page.getByLabel('Consent', { exact: true }).click();
      await page.getByPlaceholder('Search entire store here...').click();
      await page.getByPlaceholder('Search entire store here...').fill('Radiant Tee');
      await page.getByPlaceholder('Search entire store here...').press('Enter');
      await page.getByRole('link', { name: 'Radiant Tee' }).nth(1).click();
      await page.getByLabel('S', { exact: true }).click();
      await page.getByLabel('Orange').click();
      await page.getByRole('button', { name: 'Add to Cart' }).click();
      await page.goto('https://magento.softwaretestingboard.com/checkout/cart/');
      await page.getByRole('spinbutton', { name: 'Qty' }).click();
      // Clear previous value from Qty input
      await page.getByRole('spinbutton', { name: 'Qty' }).fill('');
      await page.getByRole('spinbutton', { name: 'Qty' }).fill('3');
      await page.getByRole('button', { name: 'Update Shopping Cart' }).click();
      await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
      // Await Shipping page to be loaded
      await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
      await page.getByRole('button', { name: 'Next' }).click();
      // Await Payment page to be loaded before placing an order
      await page.goto('https://magento.softwaretestingboard.com/checkout/#payment');
      await page.getByRole('button', { name: 'Place Order' }).click();
});