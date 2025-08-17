import chalk from 'chalk';

function sayHi(name) {
  console.log(`${chalk.green('Привет')}, ${chalk.blue(name)}!`);
}

function sayText(text) {
  console.log(chalk.bgBlack(chalk.white(text)));
}

function square(number) {
  return number * number;
}

function sum(a, b) {
  return a + b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function generateInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function howManyPapers(money) {
  const banknotesList = [5000, 2000, 1000, 500, 100, 50, 10, 1];
  const papers = {};
  for (let i = 0; i < banknotesList.length; i++) {
    if (money - banknotesList[i] < 0) {
      papers[banknotesList[i]] = 0;
    } else {
      const qttyBanknotes = Math.floor(money / banknotesList[i]);
      papers[banknotesList[i]] = qttyBanknotes;
      money -= qttyBanknotes * banknotesList[i];
    }
  }
  return papers;
}

export { sayHi, sayText, square, sum, power, generateInteger, howManyPapers };
