import mongoose from 'mongoose';

mongoose
    .connect('mongodb://127.0.0.1/blogs', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: Error) => console.error('Not Conneted to MongoDB', err));
