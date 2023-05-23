const {By, Key, Builder, until} = require('selenium-webdriver');
var should = require("chai").should();
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
// describe block
describe("Login to page", function(){

    //it block
    it("successfully", async function(){

        //launch the browser

        const service = new chrome.ServiceBuilder(path.resolve(__dirname, './chromedriver.exe'));
        const options = new chrome.Options();
        const driver = new Builder().forBrowser('chrome').setChromeService(service).setChromeOptions(options).build();

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


