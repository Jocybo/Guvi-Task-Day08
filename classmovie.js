class movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Title() {
        console.log(`Title Name of the Movie is "${this.title}"`);
    }
    Studio() {
        console.log(`Studio Which Made a Movie is "${this.studio}"`);
    }
    Rating() {
        console.log(`Rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
class newMovie extends movie {

    getPG() {
        console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
}
let moviee = new newMovie("Beast", "SunPictures", "PG13");
moviee.Title();
moviee.Studio();
moviee.Rating();
moviee.getPG();


class movieee {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
let movie1 = new movieee('Casino Royale', 'Eon Productions', 'PG13');
console.log(movie1)