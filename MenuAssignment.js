
const { Builder, By,Key,until } = require("selenium-webdriver");

(async function example(){
let driver =await new Builder().forBrowser('chrome').build();
try{
console.log('Start Automation');
driver.manage().window().maximize();
await driver.get("https://www.flipkart.com/");
console.log("WebSite Open");
await driver.findElement(By.className("_2IX_2- VJZDxU")).sendKeys("Automation.com");
console.log("Written Email");
await driver.sleep(3000);
await driver.findElement(By.className("_2KpZ6l _2doB4z")).click();
console.log("Cross Button clicked");
await driver.findElement(By.className("_3704LK")).sendKeys("shoes");
console.log("Shoes keyword written in text box");
await driver.sleep(2000);
await driver.findElement(By.className("_34RNph")).click();
console.log("Search button pressed");
await driver.sleep(2000);
const filtrs = await driver.findElements(By.className("_10UF8M"))
console.log("Filter click 'Low to high'");
filtrs[2].click();
await driver.sleep(3000);
const pages = await driver.findElements(By.className("ge-49M"));
console.log("Page 2 pressed");
pages[1].click();
await driver.sleep(3000);
const containers = await driver.findElements(By.className("_2UzuFa"));
console.log("Products Clicked");

try{
    await driver.get(containers[1].getAttribute('href'));
    await driver.sleep(2000);
    
    await driver.findElement(By.className("_2KpZ6l _2U9uOA _3v1-ww")).click();
    console.log("Add to cart done");
    await driver.sleep(2000);

}
catch (exception)
{
    console.log("Exception While add to cart");
}
await driver.findElement(By.className("_3SkBxJ")).click();

}
finally{
    await driver.quit();
}
})();
