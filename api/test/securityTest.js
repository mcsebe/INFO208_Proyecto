const {By, Key, Builder} = require('selenium-webdriver');
var should = require("chai").should();
let chrome = require('selenium-webdriver/chrome');
const path = require('path');

// describe block
describe("Enter to write seccion", function(){

    //it block
    it("successfully", async function(){

        //launch the browser
        
        const chrome = require('selenium-webdriver/chrome')
        const options = new chrome.Options()
      
        options.addArguments('--disable-dev-shm-usage')
        options.addArguments('--no-sandbox')
      
        const driver = new Builder()
          .forBrowser('chrome')
          .setChromeOptions(options)
          .build()

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


