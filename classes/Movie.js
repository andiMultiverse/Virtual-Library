// import the Media class:
const Media = require('./Media'); // Importing Media class

class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
      super(title, year, genre);
      this.director = director; // Make sure this is assigned correctly
      this.duration = duration; // Make sure this is assigned correctly
      this.rating = rating; // Make sure this is assigned correctly
    }
  

    // Method to validate the rating
    validateRating(rating) {
        if (rating < 1 || rating > 5) {
            throw new Error("Rating must be between 1 and 5.");
        }
        return rating;
    }

    // Method to return a summary of the movie
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
      }

    // Static method to find the longest movie
    static longestMovie(movies) {
        return movies.reduce((longest, current) => {
          return (current.duration > longest.duration) ? current : longest;
        });
      }
}
// create your Movie class:

// don't change below
module.exports = Movie;