import chalk from 'chalk';

const videoGame = {
  title: 'the Witcher 3',
  release: '18.05.2015',
};

videoGame.studio = 'CD Project Red';
videoGame.genre = 'Action RPG';
videoGame['Last version'] = '4.04';

delete videoGame['Last version'];
delete videoGame.genre;

videoGame.techInfo = {};
videoGame.techInfo.platforms = ['XBox One', 'PS4', 'PS5', 'PC', 'Nintendo Switch'];
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
};

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
    console.log(
      '\x1b[32m%s\x1b[0m',
      `%c У обоих объектов по ключу ${property} лежит одинаковое значение - ${user1[property]} `,
    );
  } else {
    console.log(
      '\x1b[31m%s\x1b[0m',
      `У объектов по ключу ${property} разные значения. У первого - ${user1[property]}, а у второго ${user2[property]} `,
    );
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

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

const relocation = (tenant) => {
  const changeCity = (city) => {
    chalk.green(city);
    return city;
  };
  const changeStreet = (street) => {
    chalk.blue(street);
    return street;
  };
  if (tenant.age < 16) {
    console.log(`Гражданину ${tenant.id} младше 16 лет - переселение не требуется`);
  } else if (tenant.age < 18) {
    if (tenant.city === 'Москва') {
      tenant.city = changeCity('Кострома');
      console.log(tenant);
    } else {
      console.log(`${tenant.id} переселение не требуется`);
    }
  } else if (tenant.age >= 18) {
    if (tenant.city === 'Москва') {
      if (tenant.address.includes('Ленина')) {
        tenant.address = changeStreet('ул. Кривая 109');
      } else {
        tenant.city = changeCity('Иваново');
        tenant.address = changeStreet('ул. Важная 5');
      }
    } else if (tenant.address.includes('Капитал')) {
      tenant.city = changeCity('Москва');
      tenant.address = changeStreet('ул. Материалистов 3');
    } else {
      tenant.address = changeStreet('ул. Центральная 2');
    }

    console.log(tenant);
  }
};

const citizen1 = {
  id: 40,
  age: 25,
  name: 'Валентин Петрович',
  city: 'Москва',
  address: 'ул. Ленина 105 Б',
};

const citizen2 = {
  id: 41,
  age: 18,
  name: 'Иван Петрович',
  city: 'Саратов',
  address: 'ул. Ленина 105 Б',
};
const citizen3 = {
  id: 42,
  age: 25,
  name: 'Александр',
  city: 'Москва',
  address: 'ул. Кривая 109',
};
const citizen4 = {
  id: 43,
  age: 3,
  name: 'Алексей Петрович',
  city: 'Пенза',
  address: 'ул. Капиталистов 5 Б',
};
const citizen5 = {
  id: 44,
  age: 17,
  name: 'Игорь Петрович',
  city: 'Самара',
  address: 'ул. Высокая 40',
};

const citizen6 = {
  id: 45,
  age: 16,
  name: 'Александр Юрьевич',
  city: 'Москва',
  address: 'ул. Мира 5',
};

relocation(citizen1);
relocation(citizen2);
relocation(citizen3);
relocation(citizen4);
relocation(citizen5);
relocation(citizen6);
