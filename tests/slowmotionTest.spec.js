// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('slowmotionTest', async () => {


  const browser = await chromium.launch({

slowMo: 500,
headless: false




});  
  const context = await browser.newContext({

    recordVideo:{

    dir:'videos/',
        size: {width:800, height:600}}

}   

  );
  const page = await context.newPage();

  await page.goto('https://kitchen.applitools.com/');
  await page.pause()
   await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
  await context.close();


})