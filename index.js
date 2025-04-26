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
    { id: 10, title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, genre: 'Gothic' },
  
    { id: 11, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'Dystopian' },
    { id: 12, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', year: 1880, genre: 'Philosophical' },
    { id: 13, title: 'Wuthering Heights', author: 'Emily Brontë', year: 1847, genre: 'Romance' },
    { id: 14, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', year: 1866, genre: 'Psychological' },
    { id: 15, title: 'The Odyssey', author: 'Homer', year: -700, genre: 'Epic' },
    { id: 16, title: 'The Iliad', author: 'Homer', year: -750, genre: 'Epic' },
    { id: 17, title: 'Les Misérables', author: 'Victor Hugo', year: 1862, genre: 'Historical' },
    { id: 18, title: 'The Divine Comedy', author: 'Dante Alighieri', year: 1320, genre: 'Epic Poetry' },
    { id: 19, title: 'Great Expectations', author: 'Charles Dickens', year: 1861, genre: 'Classic' },
    { id: 20, title: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605, genre: 'Classic' },
  
    // [21 - 100] generated automatically
    ...Array.from({ length: 80 }, (_, i) => ({
      id: i + 21,
      title: `Book Title ${i + 21}`,
      author: `Author ${i + 21}`,
      year: 1900 + (i % 123),
      genre: ['Fiction', 'Fantasy', 'Historical', 'Romance', 'Thriller', 'Adventure', 'Science Fiction', 'Mystery'][i % 8]
    }))
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
