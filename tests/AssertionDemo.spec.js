import { test, expect } from '@playwright/test';

test('Assertion Demo Test', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');
  await page.pause()
   await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)



})