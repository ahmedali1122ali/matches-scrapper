import express from 'express';
import scrapper from './scrapping.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({ origin: '*' }));

app.get('/api/matches', (req, res) => {
  scrapper()
    .then((matches) => {
      res.json(matches);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while scraping data.' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
