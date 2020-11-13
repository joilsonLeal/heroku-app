import express from 'express';
import * as dotenv from "dotenv";

if(process.env.NODE_ENV)
    dotenv.config({ path: '.env' });

const app = express();

app.get('/', (req, res) => {
    return res.json({hello: 'world'});
});

app.listen(process.env.PORT);