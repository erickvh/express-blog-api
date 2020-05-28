import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.all('*', function (req: express.Request, res: express.Response) {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
