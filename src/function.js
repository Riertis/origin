import chalk from 'chalk';

export function sayHi(name) {
  console.log(`${chalk.green('Привет')}, ${chalk.blue(name)}!`);
}

export function sayText(text) {
  console.log(chalk.bgBlack(chalk.white(text)));
}

export function square(number) {
  return number * number;
}

export function sum(a, b) {
  return a + b;
}

export function power(a, b) {
  return Math.pow(a, b);
}

export function generateInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function howManyPapers(money) {
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
