const {By, Key, Builder} = require('selenium-webdriver');
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
describe("Enter to write seccion", function(){

    //it block
    it("successfully", async function(){

        //launch the browser
        
        let driver = new webdriver.Builder()
        .usingServer('https://' + testingbotKey + ':' + testingbotSecret + '@hub.testingbot.com/wd/hub')
        .withCapabilities(capabilities)
        .build();

        //navigate to our application
        await driver.get("http://localhost:3000/write")

        //assert
        let todoText = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/span')).getText().then(function(value){
            return value
        });


        //assert using chai should
        todoText.should.equal("Login")

        //close the browser
        await driver.quit();

    });

});


