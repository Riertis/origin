import chalk from 'chalk';
import { sayHi, sayText, square, sum, power, generateInteger, howManyPapers } from './function.js';
import { drawMultFace } from '../switch.js';

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
