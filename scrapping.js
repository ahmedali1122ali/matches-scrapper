import puppeteer from 'puppeteer';

const BASE_URL = 'https://www.yallakora.com/match-center';

export async function scrapper() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: null,
    timeout: 60000,
  });
  const page = await browser.newPage();

  const urls = {
    today: BASE_URL,
    yesterday: `${BASE_URL}?date=${getDateString(-1)}#days`,
    tomorrow: `${BASE_URL}?date=${getDateString(1)}#days`,
  };

  const results = {
    today: [],
    yesterday: [],
    tomorrow: [],
  };

  for (const [label, url] of Object.entries(urls)) {
    console.log(`Scraping ${label} from: ${url}`);
    let attempts = 0;
    let success = false;
    while (attempts < 3 && !success) {
      try {
        const matches = await scrapeMatchesFromUrl(url, page);
        console.log(`→ Found ${matches.length} matches for ${label}`);
        results[label] = matches;
        success = true;
      } catch (error) {
        attempts++;
        if (attempts >= 3) {
          console.error(`Failed to scrape ${label} after 3 attempts:`, error.message);
          results[label] = [];
        } else {
          console.warn(`Retrying ${label} (${attempts}/3)...`);
        }
      }
    }
  }

  await browser.close();

  console.log(`✅ Scraping completed. Summary:`);
  Object.entries(results).forEach(([key, val]) => console.log(`${key}: ${val.length} matches`));

  return {
    results,
  };
}

function getDateString(offsetDays) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().split('T')[0];
}

async function scrapeMatchesFromUrl(url, page) {
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.waitForSelector('.mtchCntrContainer.maxWidth');

  return await page.evaluate(() => {
    const container = document.querySelector('.mtchCntrContainer.maxWidth');
    const matchCards = container.querySelectorAll('.matchCard.matchesList');
    const allMatches = [];

    matchCards.forEach((card) => {
      const league = card.querySelector('.tourTitle h2')?.innerText.trim();
      const leagueLogo = card.querySelector('.tourTitle .imgCntnr img')?.src;
      const matchItems = card.querySelectorAll('.item.liItem');

      matchItems.forEach((item) => {
        const teamA = item.querySelector('.teams.teamA p')?.innerText.trim();
        const teamAImg = item.querySelector('.teams.teamA img')?.src;

        const teamB = item.querySelector('.teams.teamB p')?.innerText.trim();
        const teamBImg = item.querySelector('.teams.teamB img')?.src;

        const scores = item.querySelectorAll('.MResult .score');
        const scoreA = scores[0]?.innerText.trim();
        const scoreB = scores[1]?.innerText.trim();

        const matchTime = item.querySelector('.MResult .time')?.innerText.trim();
        const matchStatus = item.querySelector('.matchStatus span')?.innerText.trim();
        const matchDate = item.querySelector('.topData .date')?.innerText.trim();
        const channel = item.querySelector('.channel')?.innerText.trim();

        allMatches.push({
          league,
          leagueLogo,
          teamA,
          teamAImg,
          teamB,
          teamBImg,
          scoreA,
          scoreB,
          matchTime,
          matchStatus,
          matchDate,
          channel: channel || 'Not specified',
        });
      });
    });

    return allMatches;
  });
}
