const {By, Key, Builder} = require('selenium-webdriver');
var should = require("chai").should();
require('chromedriver');

// describe block
describe("Login to page", function(){

    //it block
    it("successfully", async function(){

        //launch the browser

        const driver = new Builder().forBrowser('chrome').build();

        //navigate to our application
        await driver.get("http://localhost:3000/login")

        //add a todo
        await driver.findElement(By.id("email")).sendKeys("123@123");
        await driver.findElement(By.id("password")).sendKeys("123", Key.RETURN);

        await driver.get("http://localhost:3000/write")



        //close the browser
        await driver.quit();

    });

});


