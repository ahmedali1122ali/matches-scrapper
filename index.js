import express from 'express';
import scrapper from './scrapping.js';

const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
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