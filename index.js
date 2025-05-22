import express from 'express';
import { scrapper } from './scrapping.js';
import cors from 'cors';
import moment from 'moment-timezone';
import cron from 'node-cron';
import { prismaInstance } from './db/prisma-instance.js';

const app = express();
const PORT = 3000;

const TIMEZONE = 'Africa/Cairo';

app.use(cors({ origin: '*' }));

app.get('/api/matches', async (req, res) => {
  try {
    const todayPromise = prismaInstance.today.findMany();
    const tomorrowPromise = prismaInstance.tomorrow.findMany();
    const yesterdayPromise = prismaInstance.yesterday.findMany();

    const [today, tomorrow, yesterday] = await Promise.all([todayPromise, tomorrowPromise, yesterdayPromise]);

    const results = { today, tomorrow, yesterday };
    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while scraping data.' });
  }
});

async function scrapeAndSave() {
  try {
    const { results } = await scrapper();

    console.log('Cron job running...', results);

    if (results.today) {
      await prismaInstance.today.deleteMany();

      await prismaInstance.today.createMany({
        data: results.today,
      });
    }

    if (results.tomorrow) {
      await prismaInstance.tomorrow.deleteMany();

      await prismaInstance.tomorrow.createMany({
        data: results.tomorrow,
      });
    }

    if (results.yesterday) {
      await prismaInstance.yesterday.deleteMany();

      await prismaInstance.yesterday.createMany({
        data: results.yesterday,
      });
    }
  } catch (error) {
    console.log('Error in cron job:', error);
  }
}

cron.schedule('0 0 * * *', scrapeAndSave, {
  timezone: TIMEZONE,
});

app.listen(PORT, () => {
  scrapeAndSave();
  console.log(`Server is running on http://localhost:${PORT}`);
});
