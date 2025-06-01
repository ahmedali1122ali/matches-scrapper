import express from 'express';
import { scrapper } from './scrapping.js';
import cors from 'cors';
import moment from 'moment-timezone';
import cron from 'node-cron';
import { prismaInstance } from './db/prisma-instance.js';

const app = express();
const PORT = process.env.PORT || 8080; // تعديل المنفذ ليكون ديناميكيًا داخل Google Cloud Run
console.log(`Server will run on port: ${PORT}`);

const TIMEZONE = 'Africa/Cairo';

app.use(cors({ origin: '*' }));

app.get('/api/matches', async (req, res) => {
  try {
    const [today, tomorrow, yesterday] = await Promise.all([
      prismaInstance.today.findMany(),
      prismaInstance.tomorrow.findMany(),
      prismaInstance.yesterday.findMany(),
    ]);

    res.json({ today, tomorrow, yesterday });
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ error: 'An error occurred while retrieving data.' });
  }
});

async function scrapeAndSave() {
  try {
    const { results } = await scrapper();
    console.log('Cron job running...', results);

    if (results.today) {
      await prismaInstance.today.deleteMany();
      await prismaInstance.today.createMany({ data: results.today });
    }

    if (results.tomorrow) {
      await prismaInstance.tomorrow.deleteMany();
      await prismaInstance.tomorrow.createMany({ data: results.tomorrow });
    }

    if (results.yesterday) {
      await prismaInstance.yesterday.deleteMany();
      await prismaInstance.yesterday.createMany({ data: results.yesterday });
    }
  } catch (error) {
    console.error('Error in cron job:', error);
  }
}

// تشغيل الـ Scraper كل 5 دقائق لضمان تحديث البيانات تلقائيًا
cron.schedule('*/5 * * * *', scrapeAndSave, { timezone: TIMEZONE });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  scrapeAndSave(); // تشغيل الـ Scraper عند بدء التطبيق
});
