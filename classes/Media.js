// create your Media class:
class Media {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    static totalMediaCount = 0;

    summary() {
        return `${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }

}
// uncomment below to export it:
module.exports = Media;
