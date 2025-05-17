const { Builder, By, until } = require('selenium-webdriver');

(async function addNewBookTests() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost/BOOKHEAVEN/View/newbook.php');
    console.log("Add New Book page loaded");

    // Fill out the form 
    await driver.findElement(By.xpath('//input[@name="title"]')).sendKeys('Selenium Testing Guide');
    await driver.findElement(By.xpath('//input[@name="author"]')).sendKeys('Jane Tester');
    await driver.findElement(By.xpath('//input[@name="price"]')).sendKeys('29.99');
    await driver.findElement(By.xpath('//select[@name="category"]')).sendKeys('Fiction');
    await driver.findElement(By.xpath('//textarea[@name="description"]')).sendKeys('A beginner friendly guide to Selenium testing.');

    // Click Add Book button 
    await driver.findElement(By.xpath('//input[@name="add_book"]')).click();

    await driver.sleep(3000); // wait for add book process

    // Click "View all books" 
    await driver.findElement(By.xpath('//a[text()="View all books"]')).click();

    // Wait for navigation to complete
    await driver.wait(until.urlContains('viewbooks.php'), 5000);
    console.log("View all books link works");

  } catch (err) {
    console.error('Add New Book test failed:', err);
  } finally {
    setTimeout(() => driver.quit(), 5000);
  }
})();
