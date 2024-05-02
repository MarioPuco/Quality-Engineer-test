//  Test function that declares tests and expect function to write assertions.
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
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
});

test('Purchase and item via Add to Chart', async ({ page }) => {
      // Open the page.
      await page.goto('https://magento.softwaretestingboard.com/');
      // await page.getByLabel('Consent', { exact: true }).click();
      await page.getByPlaceholder('Search entire store here...').click();
      await page.getByPlaceholder('Search entire store here...').fill('Radiant Tee');
      await page.getByPlaceholder('Search entire store here...').press('Enter');
      await page.getByRole('link', { name: 'Radiant Tee' }).nth(1).click();
      await page.getByLabel('S', { exact: true }).click();
      await page.getByLabel('Orange').click();
      await page.getByRole('button', { name: 'Add to Cart' }).click();
      await page.goto('https://magento.softwaretestingboard.com/checkout/cart/')
      //await page.getByRole('link', { name: ' My Cart 1 items' }).click();
      //await page.getByRole('spinbutton', { name: 'Qty:' }).click();
      //await page.getByRole('spinbutton', { name: 'Qty:' }).fill('');
      //await page.getByRole('spinbutton', { name: 'Qty:' }).fill('3');
      await page.getByRole('spinbutton', { name: 'Qty' }).click();
      await page.getByRole('spinbutton', { name: 'Qty' }).fill('3');
      await page.getByRole('button', { name: 'Update Shopping Cart' }).click();
      await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
      await page.getByLabel('First Name').click();
      await page.getByLabel('First Name').fill('Mario');
      await page.getByLabel('First Name').press('Tab');
      await page.getByLabel('Last Name').fill('Test');
      await page.getByLabel('Street Address: Line 1').click();
      await page.getByLabel('Street Address: Line 1').fill('Kupreska Streett');
      await page.getByLabel('City').click();
      await page.getByLabel('City').fill('Split');
      await page.locator('select[name="region_id"]').selectOption('17');
      await page.getByLabel('Zip/Postal Code').click();
      await page.getByLabel('Zip/Postal Code').fill('21000');
      await page.getByLabel('Country').selectOption('HR');
      await page.getByLabel('Phone Number').click();
      await page.getByLabel('Phone Number').fill('+38595371234');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.getByRole('textbox', { name: 'Email Address *' }).click();
      await page.getByRole('textbox', { name: 'Email Address *' }).fill('userRadiant Tee');
      await page.getByText('Email Address This is a').click();
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('select[name="region_id"]').selectOption('515');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.getByRole('button', { name: 'Place Order' }).click();
      await page.goto('https://magento.softwaretestingboard.com/checkout/onepage/success/');
    });

test('second', async ({ page }) => {
  // page is signed in.
});
