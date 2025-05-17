const { Builder, By, until } = require('selenium-webdriver');

async function loginTests() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost/BOOKHEAVEN/View/login.php');
    console.log("Login page loaded");
  
    await driver.findElement(By.name('email')).sendKeys('ethanwint@gmail.com');
    await driver.findElement(By.name('password')).sendKeys('@ethan');
    await driver.findElement(By.name('login')).click();

    
    await driver.wait(until.urlContains('newbook'), 5000);
    console.log("✅ Login successful and dashboard loaded");

    
    await driver.get('http://localhost/BOOKHEAVEN/View/login.php'); 
    await driver.findElement(By.linkText('Sign up here')).click();

    await driver.wait(until.urlContains('seller.php'), 5000);
    console.log('✅ Sign up here" link redirects correctly.');

  } catch (err) {
    console.error('❌ Login test failed:', err);
  } finally {
    setTimeout(() => driver.quit(), 3000);
  }
}
loginTests();
