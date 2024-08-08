const Book = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  try {
    const books = Book.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookById = (req, res) => {
  try {
    const book = Book.getBookById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.ejsAllBooks = (req, res) => {
  try {
    const books = Book.getAllBooks();
    res.render('bookList', { books });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookByIdView = (req, res) => {
    try {
      const book = Book.getBookById(req.params.id);
      if (book) {
        res.render('bookDetail', { book });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };