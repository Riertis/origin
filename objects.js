const videoGame = {
    title: 'the Witcher 3',
    release: '18.05.2015',
}

videoGame.studio = 'CD Project Red';
videoGame.genre = "Action RPG";
videoGame['Last version'] = '4.04';

delete (videoGame['Last version']);
delete (videoGame.genre);

videoGame.techInfo = {};
videoGame.techInfo.platforms = ['XBox One','PS4', 'PS5','PC','Nintendo Switch'];
videoGame.techInfo.engine = 'REDengine 3';

const gameMode = 'Game Mode';
const titleMode = 'Single';

videoGame[gameMode] = titleMode;

console.log(videoGame);

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

const userName = 'Dmitriy';
const age = 34;
const address = {};
address.contry = 'Russia';
address.city = 'Penza';
address.street = 'Lenina';

const studyLang = 'JS';

const userProfile = {
    userName,
    age,
    address,
    studyLang,
}

console.log(userProfile);

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

function removeProperty(user, property) {
    delete user[property];
}

const user1 = { id: 1, age: 20, name: 'alex' };

removeProperty(user1, 'id');
console.log(user1); // { age: 20, name: 'alex' }

removeProperty(user1, 'age');
console.log(user1); // { name: 'alex' }

removeProperty(user1, 'name');
console.log(user1); // {}

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

function addProperty(user, property, value) {
    user[property] = value;
}

const user = { id: 5, name: 'max' };

addProperty(user, 'address', 'ул. Углеродная 5');
console.log(user); // { id: 5, name: 'max', address: 'ул. Углеродная 5' }

addProperty(user, 'age', 50);
console.log(user); // { id: 5, name: 'max', address: 'ул. Углеродная 5', age: 50 }

addProperty(user, 'id', -3);
console.log(user); // { id: -3, name: 'max', address: 'ул. Углеродная 5', age: 50 }
// ОБРАТИТЕ ВНИМАНИЕ!       👆  Поле id уже было, и значение перезаписалось!

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

function compare(user1, user2, property) {


    if (user1[property] === user2[property]) {
        console.log("\x1b[32m%s\x1b[0m",`%c У обоих объектов по ключу ${property} лежит одинаковое значение - ${user1[property]} `);
    } else {
        console.log("\x1b[31m%s\x1b[0m",`У объектов по ключу ${property} разные значения. У первого - ${user1[property]}, а у второго ${user2[property]} `);
    }
}

const user2 = { id: 90, name: 'stas', address: 0 };

compare(user2, { id: 90 }, 'id');
compare(user2, { id: 90, name: 'alex' }, 'name');
compare({}, {}, 'address');

user2.id = user.name.length;

compare({ id: 2 + 2, name: 'mikhail' }, user2, 'id');

user2.address = Boolean(1);
compare({ id: 2 + 2, name: 'mikhail', address: 1 }, user2, 'address');