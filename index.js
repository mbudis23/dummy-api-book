const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes and allow any origin
app.use(cors({
    origin: '*', // Allow all origins explicitly
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));

// Dummy data for books
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Classic' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Romance' },
    { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' },
    { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'Fiction' },
    { id: 7, title: 'Moby-Dick', author: 'Herman Melville', year: 1851, genre: 'Adventure' },
    { id: 8, title: 'War and Peace', author: 'Leo Tolstoy', year: 1869, genre: 'Historical' },
    { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954, genre: 'Fantasy' },
    { id: 10, title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, genre: 'Gothic' }
];

// API route to get books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
