import puppeteer from 'puppeteer';

const scrapeMatchesFromUrl = async (url, page) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.waitForSelector('.mtchCntrContainer.maxWidth');

  return await page.evaluate(() => {
    const container = document.querySelector('.mtchCntrContainer.maxWidth');
    const matchCards = container.querySelectorAll('.matchCard.matchesList');
    const allMatches = [];

    matchCards.forEach(card => {
      const league = card.querySelector('.tourTitle h2')?.innerText.trim();
      const leagueLogo = card.querySelector('.tourTitle .imgCntnr img')?.src;
      const matchItems = card.querySelectorAll('.item.liItem');

      matchItems.forEach(item => {
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
          channel: channel || 'Not specified'
        });
      });
    });

    return allMatches;
  });
};

const scrapper = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const date = new Date();

  const pad = (n) => n.toString().padStart(2, '0');
  const formatted = (offsetDays) => {
    const d = new Date(date);
    d.setDate(d.getDate() + offsetDays);
    return `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()}`;
  };

  const urls = {
    today: 'https://www.yallakora.com/match-center',
    yesterday: `https://www.yallakora.com/match-center?date=${formatted(-1)}#days`,
    tomorrow: `https://www.yallakora.com/match-center?date=${formatted(1)}#days`
  };

  const results = {};

  for (const [label, url] of Object.entries(urls)) {
    console.log(`Scraping ${label} from: ${url}`);
    try {
      const matches = await scrapeMatchesFromUrl(url, page);
      console.log(`→ Found ${matches.length} matches for ${label}`);
      results[label] = matches;
    } catch (error) {
      console.error(`Failed to scrape ${label}:`, error.message);
      results[label] = [];
    }
  }

  await browser.close();

  console.log(`✅ Scraping completed. Summary:`);
  Object.entries(results).forEach(([key, val]) =>
    console.log(`${key}: ${val.length} matches`)
  );

  return results;
};

export default scrapper;