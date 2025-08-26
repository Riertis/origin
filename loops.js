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

export function printElka(hightElka) {
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

export function printColorerObject(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    console.log(`${chalk.red(keys[i])} : ${chalk.green(values[i])}`);
  }
}

export function printMatrixAsTable(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] === 'Возраст' || matrix[i][j] === 'Алексей') {
        continue;
      }

      matrix[i][j] = matrix[i][j] + '\t';
    }
    console.log(`${matrix[i].join(' ')}`);
  }
}

export function countUsersWithAge(users) {
  let valueCounts = {};
  for (const user of users) {
    valueCounts[user['age']] = (valueCounts[user['age']] || 0) + 1;
  }
  for (const valueCountsKey in valueCounts) {
    console.log(`Возраст = ${valueCountsKey}. Количество людей = ${valueCounts[valueCountsKey]}`);
  }
}

export function countLongArrayAndPrintLastValue(user) {
  const result = {};
  let maxLength = 0;
  let lastValue;

  const userValuesArray = Object.values(user);
  for (let i = 0; i < userValuesArray.length; i++) {
    if (!Array.isArray(userValuesArray[i])) {
      continue;
    }
    const currentLength = userValuesArray[i].length;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      lastValue = userValuesArray[i][maxLength - 1];
    }
  }
  result.maxLen = maxLength;
  result.lastValue = lastValue;
  console.log(result);
}

export function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1); // {a:1,b:1} => [a, b]
  const keys2 = Object.keys(obj2); // {b:1,a:1} => [b,a]

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

export function compareObjectArrays(arrayObj1, arrayObj2) {
  if (arrayObj1.length !== arrayObj2.length) {
    return false;
  }
  for (let i = 0; i < arrayObj1.length; i++) {
    if (compareObjects(arrayObj1[i], arrayObj2[i]) === false) {
      return false;
    }
  }
  return true;
}
