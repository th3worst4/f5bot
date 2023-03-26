const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

async function openChrome() {
	let driver = await new Builder().forBrowser(Browser.CHROME).build();
	
	await driver.get('https://thesecatsdonotexist.com');
	
	for(let i=0; i<5; i++){
		await driver.navigate().refresh();
		await driver.sleep(2000);
	};
};

openChrome();
