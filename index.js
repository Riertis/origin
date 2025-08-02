//---------------------Переменные-------------------------
console.log('\nПеременные\n');

console.log('\nЗадание 1\n');

let name1 = 'Anton';
let name2 = name1;
name2 = 'Alex';

name1 = 'Kirill';
name2 = name1;

name1 = 'Evgeniy';

console.log(name1, name2); // Evgeniy Kirill

//----------------------------------------------

console.log('\nЗадание 2\n');

/*let const = 'letter'; // Зарезервированое слово
*/
/*
const maxAge = 100;
maxAge = 99; // Нельзя переписывать const
*/

let myName1 = "Ruslan";
myName1 = ''; // разрешено, ошибки нет

let yourName = `Mikhail`;
yourName = ""; // разрешено, ошибки нет

const PI = 3.14; // ошибки нет

let hisName = 'Vitaliy';
hisName = 10; // ошибки нет

let _ = 'some info';
_ = 10; // ошибки нет

console.log(myName1, yourName, hisName, PI, _); //   10 3.14 10

console.log('\nЗадание 3\n');

let a = 10;
let b = 20;

let c = a;
a = b;
b = c;

console.log(a, b); //20 10

//--------------------Типы данных--------------------------

console.log('\nТипы данных\n');

console.log('\nЗадание 1\n');

console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof ''); // string
console.log(typeof 'name'); // string
console.log(typeof (1 + 1)); //number
console.log(typeof (0 * 0)); //number
console.log(typeof 0.00000540001); //number

const a1 = 'true';
const b1 = undefined;
const c1 = false;

console.log(typeof a1); // string
console.log(typeof b1); // undefined
console.log(typeof c1); // boolean

console.log(typeof Infinity); //number
console.log(typeof NaN); //number

console.log(typeof String('1')); // string
console.log(typeof Number('1')); // number

let d;
console.log(typeof d); // undefined

d = 'NULL';
console.log(typeof d); // string

d = undefined;
console.log(typeof d); // undefined

d = 1;
console.log(typeof d); // number

console.log(typeof ""); // string
console.log(typeof ``); // string

//----------------------------------------------

console.log('\nЗадание 2\n');

let age = 10;
const size = 1.44;
const myName = 'myName';

console.log('1:', age);
console.log('2:', String(age));
console.log('3:', age);

age = String(age);

console.log('4:', age);

age = Number(age);

console.log('5:', age);

console.log('6:', Number(''));
console.log('7:', String(Number('')));
console.log('8:', Number('0'));
console.log('9:', Number('1'));
console.log('10:', String(1));
console.log('11:', Number(1));
console.log('12:', String(Number(String(1))));
console.log('13:', Number(String(Number(String(1)))));

console.log('14:', myName);
console.log('15:', String(myName));
console.log('16:', String(String(myName)));
console.log('17:', Number(myName));
console.log('18:', String(Number(myName)));

console.log('19:', String(size));
console.log('20:', Number('12.45'));
console.log('21:', Number('12,45'));

//-------------Строки---------------------------------

console.log('\nСтроки\n');

const examp = 'dfgdfgbmy'
console.log('Длина строки:', examp.length, '\nПоследний символ:', examp.charAt(examp.length - 1));

console.log('Символ по середине', examp.charAt(Math.ceil(examp.length / 2) - 1));

//----------------------------------------------

console.log('\nЗадание 1\n');

const taskLngthWord = 'Hello World';

console.log('Длина строки:',taskLngthWord.length);
console.log(taskLngthWord.toUpperCase());

//----------------------------------------------

console.log('\nЗадание 2\n');

const firstChar = examp.charAt(0);
const endChar = examp.charAt(examp.length - 1);

const examp2 = firstChar.toUpperCase() + examp.slice(1, examp.length -1) + endChar.toUpperCase();

console.log(examp,'\n',firstChar,'\n',endChar,'\n',examp2);

//----------------------------------------------

console.log('\nЗадание 3\n');

const taskCharWord = 'молоко'
let lastResult;
const arrayCharIndex = [];

while (lastResult !== -1) {
   lastResult = taskCharWord.indexOf('о', lastResult + 1);
   if (lastResult !== -1) {
      arrayCharIndex.push(lastResult);
   }
}

console.log(arrayCharIndex[0], arrayCharIndex[arrayCharIndex.length-1]);

//----------------------------------------------

console.log('\nЗадание 4\n');

const checkChar1 = taskCharWord.indexOf('у');
const checkChar2 = taskCharWord.indexOf('м');

if (checkChar1 || checkChar2 === -1) {
   console.log(`В слове ${taskCharWord} отсутсвуют буквы 'у' или 'м'`);
}

//----------------------------------------------

console.log('\nЗадание 5\n');

const word1 = 'привет';
const word2 = 'ветеринар';

function findCharWord (word) {
   console.log(word);
   if (word.indexOf('вет') === 0) {
      console.log('Слово начинается на "вет"');
   } else
      console.log('Слово не начинается на "вет"');
}

findCharWord(word1);
findCharWord(word2);

console.log('\nЗадание 6\n');

const text = 'this_is_an_example_string';

const arrayText = text.split('_');

console.log(arrayText);

console.log('\nЗадание 7\n');

const name = 'Dmitriy';
const message = `Добро пожаловать, ${name}, благодарим за регистрацию!
    Надеемся, Вам понравится;`
console.log(message);