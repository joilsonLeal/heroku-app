import express from 'express';
import * as dotenv from "dotenv";

dotenv.config({ path: '.env' });

const app = express();

app.get('/', (req, res) => {
    return res.json({hello: 'world'});
});

app.listen(process.env.PORT);