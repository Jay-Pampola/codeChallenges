const getSleepHours = day => {
    if (day === 'monday') {
        return 10;
    } else if (day === 'tuesday') {
        return 6;
    }
    else if (day === 'wednesday') {
        return 4;
    }
    else if (day === 'thursday') {
        return 4;
    }
    else if (day === 'friday') {
        return 8;
    }
    else if (day === 'saturday') {
        return 5;
    }
    else if (day === 'sunday') {
        return 10;
    }
}

//console.log(getSleepHours('saturday'));

const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You\'ve got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You\'ve got more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. You should get some rest.')
    }
}

calculateSleepDebt();