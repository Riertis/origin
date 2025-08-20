import chalk from 'chalk';
import { sayHi, sayText, square, sum, power, generateInteger, howManyPapers } from './function.js';
import { drawMultFace } from '../switch.js';
import {
  randomArray,
  countNumbers,
  getMinMaxAvgNumbers,
  doubleDices,
  revertText,
  peopleFilter,
  elka,
} from '../loops.js';

console.log(chalk.bgBlue(chalk.grey('Hello')));
console.log(chalk.bgBlack(chalk.green('Hello')));
console.log(chalk.bgGray(chalk.red('Hello')));
console.log(chalk.bgGreen(chalk.blue('Hello')));

sayHi('Анатолий');
sayText('Hello');
console.log(square(3));
console.log(sum(4, 9));
console.log(power(4, 4));
console.log(generateInteger(1, 5));
console.log(howManyPapers(655));

console.log(drawMultFace('patrick'));
console.log(drawMultFace('spongebob'));
console.log(drawMultFace('squidward'));
console.log(drawMultFace('plankton'));
console.log(drawMultFace('mr. Crabs'));

console.log(countNumbers(randomArray(-3, 3, 5)));
console.log(getMinMaxAvgNumbers(randomArray(2, 15, 8)));
console.log(doubleDices());

const text = 'Создайте строковую переменную, запишите туда любой текст.';
console.log(text);
console.log(revertText(text));

const people = [
  { id: 8, name: 'Александр', gender: 'm', age: 25 },
  { id: 12, name: 'Мария', gender: 'f', age: 22 },
  { id: 31, name: 'Иван', gender: 'm', age: 17 },
  { id: 34, name: 'Ольга', gender: 'f', age: 19 },
  { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
  { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
  { id: 3, name: 'Сергей', gender: 'm', age: 18 },
  { id: 20, name: 'Анна', gender: 'f', age: 20 },
  { id: 19, name: 'Андрей', gender: 'm', age: 15 },
  { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];

console.log(peopleFilter(people));

elka(7);
