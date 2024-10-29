const Media = require('./Media'); // Importing Media class

class Music extends Media {
    constructor(title, year, genre, artist, length) {
      super(title, year, genre);
      this.artist = artist; // Make sure to assign this correctly
      this.length = length; // Make sure to assign this correctly
    }
  

    // Method to return a summary of the music
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
      }

    // Static method to find the shortest song in an album
    static shortestAlbum(musicTracks) {
        if (musicTracks.length === 0) return null; // Handle empty array
        return musicTracks.reduce((shortest, current) => {
            return current.length < shortest.length ? current : shortest;
        });
        
    }
    static calculateAverageRating(movies) {
        const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
        return totalRating / movies.length || 0; // Handle division by zero
    }
}


 // Export the Movie class

// create your Music class:

// don't change below
module.exports = Music;
