const { Builder, By, until } = require("selenium-webdriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    let connect =  await driver.get('http://localhost/BOOKHEAVEN/View/login.php');

    console.log("✅ Test Successful: Start testing!");

  } catch (err) {
    console.error("Couldn't reach the site!")
    console.error("❌ Test failed:", err.message);

  } finally {
    setTimeout(() => driver.quit(), 3000);
  }
}

test();