const {test, expect} = require('@playwright/test');

test('Sign in rahulshettyacademy', async({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await expect(page).toHaveTitle("Let's Shop");

  await page.locator('#userEmail').type('anshika@gmail.com');
  await page.locator('#userPassword').type('Iamking@000'); 
  await page.locator('#login').click();
  await expect(page).toHaveURL(/dashboard/);

  await page.locator("//*[@id='products']//*[@class='row']/div[1]//*[contains(@class,'fa-shopping-cart')]/parent::button").click();
  await page.locator("//*[@routerlink='/dashboard/cart']").click();
  await page.locator("//button[text()='Checkout']").click();
  await expect(page.locator("//*[contains(text(),'Payment Method')]")).toBeVisible();

  await page.locator("//*[contains(text(),'CVV Code')]/following-sibling::input").type('666');
  await page.locator("//input[@placeholder='Select Country']").type('India');
  await page.locator("//*[text()=' India']").click();
  await page.locator("//*[contains(text(),'Apply Coupon ')]/following-sibling::input").type('rahulshettyacademy');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//*[contains(text(),'Place Order')]").click();
  await expect(page.locator("//div[text()=' Order Placed Successfully ']")).toBeVisible();
  await expect(page.locator("//*[contains(text(),'Thankyou for the order.')]")).toBeVisible();
});
