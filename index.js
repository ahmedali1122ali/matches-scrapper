import express from 'express';
import { scrapper } from './scrapping.js';
import cors from 'cors';
import moment from 'moment-timezone';

const app = express();
const PORT = 3000;

const CACHE_DURATION_IN_MILLI_SECONDS = 1000 * 60 * 60; // 1hour

const TIMEZONE = 'Africa/Cairo';

// Cache object
let cache = {
  data: null,
  fetchedAt: 0,
  cairoMidnight: 0,
};

// Helper to get next Cairo midnight timestamp
function getNextCairoMidnight() {
  const now = moment().tz(TIMEZONE);
  return now.clone().add(1, 'day').startOf('day').valueOf();
}

app.use(cors({ origin: '*' }));

app.get('/api/matches', async (req, res) => {
  const now = moment().tz(TIMEZONE).valueOf();

  const dontServeCache = req.query['no-cache'] === 'true';

  // Check if cache is valid: not expired and not past Cairo midnight
  const isCacheValid =
    !dontServeCache &&
    cache.data &&
    now - cache.fetchedAt < CACHE_DURATION_IN_MILLI_SECONDS &&
    now < cache.cairoMidnight;

  if (isCacheValid) {
    return res.json(cache.data);
  }

  try {
    const { isErrored, results } = await scrapper();
    if (!isErrored) {
      cache = {
        data: results,
        fetchedAt: now,
        cairoMidnight: getNextCairoMidnight(),
      };
    }
    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while scraping data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
