import express from 'express';
import postRoutes from './controllers/posts';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postRoutes);
app.all('*', function (req: express.Request, res: express.Response) {
    res.sendStatus(404);
});

mongoose
    .connect('mongodb://127.0.0.1/blogs', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: Error) => console.error('Not Conneted to MongoDB', err));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
