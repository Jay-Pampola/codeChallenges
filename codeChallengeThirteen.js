class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(checkOut) {
        this._isCheckedOut = checkedOut;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    get getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentRate, rating) => currentRate + rating);
        return 'Average Ratings: ' + ratingsSum / this.ratings.length;
    }

    addRating(rateValue) {
        this.ratings.push(rateValue);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this.runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed);
console.log(speed.getAverageRating);

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    shuffle() {
        this._songs.sort(function () { return 0.5 - Math.random() });
    }
}

const mltr = new CD('Michael Learns To Rock', 'Greatest Hits MLTR', ['Sleeping Child', 'Paint My love', 'Nothing To Lose', 'Out Of The Blue']);
mltr.shuffle();
//mltr.toggleCheckOutStatus();
mltr.addRating(5);
mltr.addRating(3);
mltr.addRating(4);

console.log(mltr);
console.log(mltr.getAverageRating);   