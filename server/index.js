import axios from 'axios';
import express from 'express';
import cors from 'cors';
import postsData from './utils/postsData.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/posts',async (req,res) => {
    res.status(200).json(postsData);
})

    app.post('/posts/add', async(req,res) => {
        const newPost = req.body;
        postsData.push(newPost);
        res.status(201).json(newPost);
    })

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})