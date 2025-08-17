// Числа от 100 (вкл) до 999 (вкл). То есть трехзначные! Иначе - null;
/*const isTwins = (a, b) => {
  if (a < 100 || a > 999 || b < 100 || b > 999) {
    return null;
  }

  const firstElem = (numb) => {
    return Math.floor(numb / 100);
  };

  const centerElem = (numb) => {
    return Math.floor((numb % 100) / 10);
  };

  const lastElem = (numb) => {
    return Math.floor(numb % 10);
  };

  console.log(firstElem(a), lastElem(b));
  console.log(centerElem(a), centerElem(b));
  console.log(lastElem(a), firstElem(b));

  if (firstElem(a) !== lastElem(b) || centerElem(a) !== centerElem(b) || firstElem(b) !== lastElem(a)) {
    return false;
  } else {
    return true;
  }

  // гарантировано что оба числа трехзначные
  // Math.floor - округление вниз
  // % - остаток от деления
  // 123:
  //  1 - поделить на 100 с округлением вниз
  //  2 - 123 % 100 => 23, затем 23 нацело делим на 10 с округлением вниз
  //  3 - остаток от деления на 10

  // 321:
  //  3 - поделить на 100 с округлением вниз
  //  2 - 321 % 100 => 21, затем 21 нацело делим на 10 с округление вниз
  //  1 - остаток от деления на 10

  // 4321:
  //  4 - поделить на 1000 с округлением вниз
  //  3 - 4321 % 1000 => 321, затем 321 делим на 100 с округлением вниз
  //  2 - 4321 % 100 => 21, затем 21 нацело делим на 10 с округление вниз
  //  1 - остаток от деления на 10

  // Сравнивает полученный данные
};

console.log(isTwins(123, 321)); // true
console.log(isTwins(111, 111)); // true
console.log(isTwins(657, 657)); // false*/

const isTwins = (a, b) => {
  //получаем количество знаков в числе
  const qttySign = (number) => {
    number = String(number);
    return number.length;
  };

  // проверки на корректность ввода чисел
  if (Number(a) !== a || Number(b) !== b || qttySign(a) !== qttySign(b) || a % 1 !== 0 || b % 1 !== 0) {
    return null;
  }

  console.log(`Ищем палиндромы среди чисел ${a} и ${b}`);

  //получаем модуль для деления
  const exp = Math.pow(10, qttySign(a)) / 10;

  //получение первой цифры
  const firstSign = (number) => {
    return Math.floor(number / exp);
  };

  //получаес центральные цифры с записью в массив
  function centerSign(number) {
    let signArray = [];
    let modulo = exp;
    for (let i = 1; i < qttySign(number) - 1; i++) {
      let step = modulo / 10;
      let sign = Math.floor((number % modulo) / step);
      modulo = modulo / 10;
      signArray.push(sign);
    }

    return signArray;
  }
  // сравниваем массивы числел
  const compareArrays = (a, b) => {
    const len = a.length;
    for (let i = 1; i < Math.floor(len / 2); i++) {
      if (a[i] !== b[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  const lastSign = (number) => {
    return number % 10;
  };

  console.log(`Первый знак ${firstSign(a)} от числа ${a}, первый знак ${firstSign(b)} от числа ${b}`);
  console.log(`знаки между первым и последним, ${centerSign(a)} от числа ${a}, ${centerSign(b)} от числа ${b}`);
  console.log(`Последний знак ${lastSign(a)} от числа ${a}, последний знак ${lastSign(b)} от числа ${b}`);

  //проверяем на палиндром
  if (firstSign(a) === lastSign(b) && compareArrays(a, b) && firstSign(b) === lastSign(a)) {
    console.log('Палиндром найден');
    return true;
  } else {
    console.log('Палиндром отсутствует');
    return false;
  }
};

console.log(isTwins(12356, 32156));
console.log(isTwins(123456, 654321));
