import express from 'express';
import { createConnection } from "typeorm";
import 'reflect-metadata';

const app: express.Express = express();
const PORT: number = 8000;
createConnection().then(_ => console.log('[database]: Database Created ⚡️'));

app.get('/', (req: express.Request, res: express.Response) => res.send('TS + Express + TypeORM + SQLite + Nodemon 🚀🚀🚀'));

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT} ⚡️`);
});