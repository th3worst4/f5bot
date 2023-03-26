const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

async function openChrome() {
	let driver = await new Builder().forBrowser(Browser.CHROME).build();
	
    await driver.get("https://thesecatsdonotexist.com");
    await driver.sleep(2000);
    
    title = await driver.getTitle();
    console.log(title)

    while(title != "Google"){
        await driver.get(randomWebSite());
        title = await driver.getTitle();
        await driver.sleep(2000);
    }

};

function randomWebSite(){
    let index = Math.floor(Math.random()*10);
    if(index < 6){
        return "https://google.com"
    }else{
        return "https://thesecatsdonotexist.com"
    };
};

openChrome();