const express = require('express');
const router = express.Router();

// contoh data buku (dummy data)
const books = [
  { id: 1, title: "Belajar Express", author: "Pradipta" },
  { id: 2, title: "Node.js Dasar", author: "Putra" },
];

// GET semua buku
router.get('/', (req, res) => {
  res.json(books);
});

// GET buku berdasarkan ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
  res.json(book);
});

// POST tambah buku baru
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = router;
