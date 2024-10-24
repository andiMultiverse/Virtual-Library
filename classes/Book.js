// import the Media class:
const Media = require("./Media");

class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static highestRating(books) {
    return books.reduce((highestRated, currentBook) =>
      currentBook.rating > highestRated.rating ? currentBook : highestRated
    );
  }
}

// create your Book class:

// don't change below
module.exports = Book;
