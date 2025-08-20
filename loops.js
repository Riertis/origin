import { generateInteger } from './src/function.js';
import chalk from 'chalk';

export const randomArray = (min, max, qty) => {
  let arr = [];
  for (let i = 0; arr.length < qty; i++) {
    arr.push(generateInteger(min, max));
  }
  console.log(arr);
  return arr;
};

export function countNumbers(arr) {
  const result = {
    positive: 0,
    negative: 0,
  };

  for (const number of arr) {
    if (number >= 0) {
      result.positive++;
    } else {
      result.negative++;
    }
  }
  return result;
}

export function getMinMaxAvgNumbers(arr) {
  const result = {
    min: 0,
    max: 0,
    avg: 0,
  };
  result.max = Math.max(...arr);
  result.min = Math.min(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  result.avg = sum / arr.length;
  return result;
}

export const doubleDices = () => {
  let diceOne = Math.floor(Math.random() * 6 + 1);
  let diceTwo = Math.floor(Math.random() * 6 + 1);
  let count = 1;
  while (diceOne !== diceTwo) {
    diceOne = Math.floor(Math.random() * 6 + 1);
    diceTwo = Math.floor(Math.random() * 6 + 1);
    count++;
  }
  console.log(`Число бросков кубиков : ${count}`);
  console.log(`Результат первого куба : ${diceOne}`);
  console.log(`Результат первого куба : ${diceTwo}`);
};

export function revertText(text) {
  let arr = text.split('');
  let revertArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revertArray.push(arr[i]);
  }
  revertArray = revertArray.join('');
  return revertArray;
}

export function peopleFilter(people) {
  let filteredPeople = {
    mans: [],
    women: [],
  };
  for (let i = 0; i < people.length; i++) {
    if (people[i].gender === 'm' && people[i].age > 18) {
      filteredPeople.mans.push(people[i].name);
    }

    if (people[i].gender === 'f' && people[i].age > 20) {
      filteredPeople.women.push(people[i].name);
    }
  }
  return filteredPeople;
}

export function elka(hightElka) {
  const star = '*';
  const space = ' ';
  let qtyStar = 1;
  let qtySpaces = hightElka - 1;
  let stars;
  for (let i = 0; i < hightElka; i++) {
    let spaces = space.repeat(qtySpaces);
    if (qtyStar % 2 > 0) {
      stars = star.repeat(qtyStar);
    }
    qtyStar += 2;
    qtySpaces--;

    console.log(spaces, stars);
  }
}

export function printNumbers(number) {
  // let qtyNumbers = 0;
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}

printNumbers(9);
