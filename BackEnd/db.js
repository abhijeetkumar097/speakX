const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbname = 'question';
const collection = 'ques';

const client = new MongoClient(url);

app.get('/search', async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1; // Get the page number from the query, default to 1 if not provided
        const limit = 10; // Number of documents per page
        const skip = (page - 1) * limit; // Calculate the number of documents to skip
        const searchTerm = req.query.searchTerm || ""; // Get the search term from the query

        await client.connect();
        console.log('Connected to MongoDB server');

        const db = client.db(dbname);

        // Fetch documents with pagination
        const result = await db.collection(collection)
            .find({ title: { $regex: searchTerm, $options: "i" } }) // Case-insensitive search
            .skip(skip) // Skip the required number of documents
            .limit(limit) // Limit the number of documents per page
            .toArray();

        res.json(result);
        //console.log(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
        console.log('Connection to MongoDB server closed');
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});