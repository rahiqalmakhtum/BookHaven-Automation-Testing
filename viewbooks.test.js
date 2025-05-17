const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function verifyBookAdded() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost/BOOKHEAVEN/View/viewbooks.php");
    console.log("All Books page loaded");

    await driver.wait(until.elementLocated(By.css("table")), 5000);

    let rows = await driver.findElements(By.css("table tbody tr"));

    let bookFound = false;

    for (let row of rows) {
      let text = await row.getText();
      if (
        text.includes("Selenium Testing Guide") &&
        text.includes("Jane Tester") &&
        text.includes("30") &&
        text.includes("Fiction") &&
        text.includes("A beginner friendly guide to Selenium testing.")
      ) {
        bookFound = true;
        break;
      }
    }

    assert.strictEqual(bookFound, true, "❌ Book record not found in table");
    console.log("✅ Book record successfully found in the table.");

  } catch (err) {
    console.error("❌ Test failed:", err.message);
  } finally {
    setTimeout(() => driver.quit(), 3000);
  }
}
verifyBookAdded();
