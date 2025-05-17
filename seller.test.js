const { Builder, By, until } = require('selenium-webdriver');

async function sellerRegistrationTests() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost/BOOKHEAVEN/View/seller.php');
    console.log("Seller Registration page loaded");


    // Fill form with valid data
    await driver.findElement(By.name('first_name')).sendKeys('John');
    await driver.findElement(By.name('last_name')).sendKeys('Doe');
    await driver.findElement(By.name('email')).sendKeys('john@example.com');
    await driver.findElement(By.name('password')).sendKeys('Password123@');
    await driver.findElement(By.name('confirm_password')).sendKeys('Password123@');
    await driver.findElement(By.name('phone')).sendKeys('1234567890');
    await driver.findElement(By.name('address')).sendKeys('123 Main St');
    await driver.findElement(By.name('store_name')).sendKeys('John’s Books');
    await driver.findElement(By.name('business_license_number')).sendKeys('LIC123456');
    await driver.findElement(By.name('business_address')).sendKeys('123 Business Rd');
    await driver.findElement(By.name('date_field')).sendKeys('1980-01-01');
    await driver.findElement(By.css('#gender_male')).click();
    
    await driver.sleep(3000);
    await driver.findElement(By.css('#signup')).click();

    await driver.sleep(3000); 
    
    await driver.findElement(By.linkText('Go back to login?')).click();


    await driver.wait(until.urlContains('login.php'), 5000);
    console.log("Go back to login link works");

  } catch (err) {
    console.error('Seller registration test failed:', err);
  } finally {
    await driver.quit();
  }
}
sellerRegistrationTests();
