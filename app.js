import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import axios from 'axios';

const app = express()

app.use(cors())
app.use(bodyParser.json())

dotenv.config()

const port = 3002

app.get('/api/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer rnd_MqUE4y28da5JCg3t2nkxjpkwlbUP`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving applications' });
    }
});

app.listen(port, () => {
    console.log(`my application is running on http://localhost:${port}`)
})