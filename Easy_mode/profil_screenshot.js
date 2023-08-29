const puppeteer = require('puppeteer');


async function takeScreenshotOfInstagramProfile(username) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Navigate to the Instagram profile
	await page.goto(`https://www.instagram.com/${username}/`);

	// Take a screenshot of the profile
	await page.screenshot({ path: 'profile_screenshot.png' });

	await browser.close();
  }


  takeScreenshotOfInstagramProfile('username');
