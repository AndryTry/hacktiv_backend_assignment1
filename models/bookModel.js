const books = require('../data/books.json');

class Book {
  static getAllBooks() {
    return books;
  }

  static getBookById(id) {
    return books.find((book) => book.id === Number(id));
  }

}

module.exports = Book;