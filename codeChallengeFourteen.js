//SCHOOL CATALOGUE

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            return newNumberOfStudents
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(listOfTeacher) {
        const randomTeacher = Math.floor(listOfTeacher.length * Math.random());
        return 'Substitute Teacher: ' + listOfTeacher[randomTeacher];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return 'Sport Teams: ' + this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
console.log(lorraineHansbury);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
//console.log(alSmith.sportsTeams);
console.log(alSmith);

class MiddleSchool extends School {
    constructor(name, numberOfStudents, mission, vision) {
        super(name, 'middle', numberOfStudents);
        this._mission = mission;
        this._vision = vision;
    }

    get mission() {
        return 'Our Mission: ' + this._mission;
    }

    get vision() {
        return 'Our Vision: ' + this._vision;
    }
}

const joseRizal = new MiddleSchool('Dr. Jose P. Rizal School', 350, 'To provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.', 'A community where all children feel loved, respected and encouraged to develop to their fullest potential.');
console.log(joseRizal);
joseRizal.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//console.log(joseRizal.mission);
//console.log(joseRizal.vision);




