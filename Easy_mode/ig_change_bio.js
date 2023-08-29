const puppeteer = require('puppeteer');
const axios = require('axios');

async function updateInstagramBioWithRandomJoke() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to Instagram and log in
  await page.goto('https://www.instagram.com/');
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', 'your_username');
  await page.type('input[name="password"]', 'your_password');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Fetch a random joke from the API
  const joke = await getRandomJoke();

  // Update bio with the random joke
  await page.goto('https://www.instagram.com/your_username/');
  await page.waitForSelector('textarea[aria-label="Bio"]');
  await page.$eval('textarea[aria-label="Bio"]', (element, joke) => {
    element.value = joke;
  }, joke);

  // Save the updated bio
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  await browser.close();
}

async function getRandomJoke() {
  try {
    const response = await axios.get('https://api.example.com/random-joke'); // Replace with the actual joke API endpoint
    return response.data.joke;
  } catch (error) {
    console.error('Error fetching random joke:', error);
    return 'Failed to fetch a joke';
  }
}

updateInstagramBioWithRandomJoke();
