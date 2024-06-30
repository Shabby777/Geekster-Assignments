const puppeteer = require('puppeteer');

async function scrapeIPLData() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.iplt20.com/stats/');

  await page.waitForSelector('.np-stats-table');

  // Scraping data from the first page
  const data = await page.evaluate(() => {
    const rows = document.querySelectorAll('.np-stats-table tbody tr');
    const stats = [];
    rows.forEach(row => {
      const columns = row.querySelectorAll('td');
      const playerData = {
        position: columns[0].innerText,
        player: columns[1].innerText,
        matches: columns[2].innerText,
        innings: columns[3].innerText,
        runs: columns[4].innerText,
        average: columns[5].innerText,
        strikeRate: columns[6].innerText,
        fifties: columns[7].innerText,
        hundreds: columns[8].innerText,
        highestScore: columns[9].innerText
      };
      stats.push(playerData);
    });
    return stats;
  });

  console.log(data);


  const nextButton = await page.$('.pagination__next');
  if (nextButton) {
    await nextButton.click();
    await page.waitForTimeout(3000);
    const moreData = await page.evaluate(() => {
      const rows = document.querySelectorAll('.np-stats-table tbody tr');
      const stats = [];
      rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        const playerData = {
          position: columns[0].innerText,
          player: columns[1].innerText,
          matches: columns[2].innerText,
          innings: columns[3].innerText,
          runs: columns[4].innerText,
          average: columns[5].innerText,
          strikeRate: columns[6].innerText,
          fifties: columns[7].innerText,
          hundreds: columns[8].innerText,
          highestScore: columns[9].innerText
        };
        stats.push(playerData);
      });
      return stats;
    });
    data.push(...moreData);
  }

  await browser.close();
  return data;
}

scrapeIPLData().then(data => console.log(data));
