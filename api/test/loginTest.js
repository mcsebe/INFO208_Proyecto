const {By, Key, Builder, until} = require('selenium-webdriver');
var should = require("chai").should();
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
const webdriver = require('selenium-webdriver');
const fs = require('fs')

const testingbotKey = process.env.TB_KEY;
const testingbotSecret = process.env.TB_SECRET;

const capabilities = {
    'browserName': 'firefox',
    'platform': 'WIN10',
    'version': 'latest',
    'client_key': testingbotKey,
    'client_secret': testingbotSecret,
    'name': 'GitHub Action Test'
};
// describe block
describe("Login to page", function(){

    //it block
    it("successfully", async function(){

        //launch the browser

        let driver = new webdriver.Builder()
        .usingServer('https://' + testingbotKey + ':' + testingbotSecret + '@hub.testingbot.com/wd/hub')
        .withCapabilities(capabilities)
        .build();

        //navigate to our application
        await driver.get("http://localhost:3000/login")

        //add a todo
        await driver.findElement(By.id("email")).sendKeys("123@123");
        await driver.findElement(By.id("password")).sendKeys("123", Key.RETURN);
        await driver.get("http://localhost:3000/")
        await driver.wait(until.urlIs("http://localhost:3000/"), 5000);

        //assert
        let todoText = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/span[1]')).getText().then(function(value){
            return value
        });


        //assert using chai should
        todoText.should.equal("Gestión de tesis y artículos académicos")

        //close the browser
        await driver.quit();

    });

});


