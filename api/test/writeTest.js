const {By, Key, Builder, WebElement} = require('selenium-webdriver');
var should = require("chai").should();
let chrome = require('selenium-webdriver/chrome');
const path = require('path');

// describe block
describe("Login to page", function(){

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
        await driver.get("http://localhost:3000/login")
        
        //add a todo
        await driver.findElement(By.id("email")).sendKeys("123@123");
        await driver.findElement(By.id("password")).sendKeys("123", Key.RETURN);
        await new Promise(r => setTimeout(r, 1500));
        
        await driver.get("http://localhost:3000/write");
        await driver.findElement(By.xpath('//*[@id="root"]/div[2]/form/div[1]/input[2]')).sendKeys("Tesis de pregrado");
        await driver.findElement(By.xpath('//*[@id="root"]/div[2]/form/div[2]/input[1]')).sendKeys("Juan Perez");
        await driver.findElement(By.xpath('//*[@id="start"]')).sendKeys("01-01-2020");
        await driver.findElement(By.xpath('//*[@id="lang"]')).sendKeys("Developing");
        await driver.findElement(By.xpath('//*[@id="root"]/div[2]/form/div[4]/textarea')).sendKeys("Tesis sobre las ciencias sociales ");
        await driver.findElement(By.xpath('//*[@id="root"]/div[2]/form/div[5]/input')).sendKeys("Tesis sobre las ciencias sociales ");
        

        
        const filePath = path.join(__dirname, 'MiArchivo.pdf');
        await driver.findElement(By.id('fileInput2')).sendKeys(filePath);
        await driver.findElement(By.xpath('//*[@id="root"]/div[2]/form/button')).click();
        await new Promise(r => setTimeout(r, 1500));

        //assert
        let todoText = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div/h1')).getText().then(function(value){
            return value
        });


        //assert using chai should
        todoText.should.equal("Tesis de pregrado")

        //close the browser
        await driver.quit();

    });

});

