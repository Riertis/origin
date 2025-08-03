/*
const randNumber = Math.floor(  (-2) + Math.random() * (5));
console.log( randNumber );

if (randNumber > 0) {
    console.log('Положительное')
} else if (randNumber < 0) {
    console.log('Отрицательное')
} else {
    console.log(null);
} */
//---------------------------

let fullname = 'Alexander Adams';
let surname = '';

const newLine = '\n';

const threshold = 10;

if (fullname.length > threshold) {
    console.log(`У ${fullname} длинное имя, оно превышает ${threshold} знаков`, newLine); //выведет

    fullname.toUpperCase();

    const letter1 = 'M';
    if (fullname.indexOf(letter1) !== -1) {
        console.log(`Буква "${letter1}" найдена`); //Xвыведет --> не выведет, переменная не переписана
    } else {
        console.log(`Буква "${letter1}" не найдена`);
    }

    const letter2 = 'R';
    if (fullname.toUpperCase().includes(letter2)) {
        console.log(`Буква "${letter2}" найдена`, newLine);// выведет
    } else {
        console.log(`Буква "${letter2}" не найдена`);
    }

    fullname = '              ';

    if (surname) {
        console.log(`Его фамилия: ${surname}`, newLine);
    } else {
        surname = 'Себастьянов'; // Xвыведет???
    }
}

if (fullname.trim().length) {
    console.log(`Осталось имя: ${fullname}`, newLine);
} else {
    console.log('Имя пустое', newLine); //выведет
}

const start = 2;
const end = 5;

let index = start;
const phrase = surname.at(index++) + surname.at(index++) + surname.at(index++);

if (surname.slice(start, index) === phrase) {
    console.log(`"${phrase}" действительно лежит внутри "${surname}" между ${start} и ${end} символами`, newLine);
} //выведет

const star = '*';
const underscore = '_';
const count = 3 + Math.round(Math.random() * 3);

const prettified = `${star.repeat(count)}-${surname}-${star.repeat(count)}`;

console.log(prettified);
console.log(prettified.replaceAll(star, underscore));

//--------------------------------------

const randNumber = Math.floor(1 + Math.random() * 20);
console.log(randNumber);

if ((randNumber % 3 === 0) && (randNumber % 5 === 0)) {
    console.log('FizzBuzz')
} else

    if (randNumber % 5 === 0) {
            console.log('Buzz');
        } else if (randNumber % 3 === 0) {
            console.log('Fizz');
        }

//-----------------------------------

let randYear = Math.round(1980 + Math.random() * 140);

while (randYear % 10 !== 0) {
    ++randYear;
}
console.log(randYear);

if ((randYear % 4 === 0) && ((randYear % 400 === 0) || (randYear % 100 !== 0))) {
    console.log('Год високосный')
} else {
    console.log('Год не високосный')
}
