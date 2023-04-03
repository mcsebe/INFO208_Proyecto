const {By, Key, Builder, until} = require('selenium-webdriver');
var assert = require("chai").assert;
require('chromedriver');

// describe block
describe("Time login to page", function(){

    //it block
    it("successfully", async function(){

        //launch the browser

        const driver = new Builder().forBrowser('chrome').build();

        //navigate to our application
        await driver.get("http://localhost:3000/login")

        //add a todo
        const startTime = new Date().getTime();
        await driver.findElement(By.id("email")).sendKeys("123@123");
        await driver.findElement(By.id("password")).sendKeys("123", Key.RETURN);
        await driver.get("http://localhost:3000/")
        await driver.wait(until.urlIs("http://localhost:3000/"), 5000);

        const endTime = new Date().getTime();
        const totalTime = endTime - startTime;

        //assert
        assert(totalTime < 2000, 'El tiempo de inicio de sesión es demasiado largo');

        //close the browser
        await driver.quit();

    });

});


