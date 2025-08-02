// ----Numbers----

console.log('Задание 1\n');

const a = Math.round(Math.random() * 10);

console.log(`Площадь квадрата со сторой a= ${a} равна ${a**2}\n`);

//------------------------

console.log('Задание 2\n');

const rad = Math.round(1 + Math.random() * 19);
const sqrCircle = Math.PI * (rad ** 2);

console.log(`Радиус: ${rad}\nПлощадь: ${sqrCircle.toFixed(2)}\n`);

//-------------------------

console.log('Задание 3\n');

const goodsWidth = 4.5;
const goodsHeight = 6.67;
const transitCost = 350;

const transitSqr = goodsWidth * goodsHeight;
const fullTransitSqr = Math.ceil(transitSqr);
const fullTransitCost = transitCost * fullTransitSqr;

const banknote100 = Math.floor(fullTransitCost / 100);
const banknote50 = Math.ceil((fullTransitCost % 100) / 50);

console.log(`Ширина: ${goodsWidth}
Длина: ${goodsHeight}
Площадь: ${transitSqr} м^2
-------------
Нужно оплатить: ${fullTransitSqr} м^2
Цена 1 м^2: ${transitCost} руб
Сумма за ${fullTransitSqr} м^2: ${fullTransitCost}
------------
Нужно дать сто рублевых купюр: ${banknote100}
Нужно дать пятидесяти рублевых купюр: ${banknote50}`);

//-----------------------------------------

console.log('Задание 4');

const classrooms = Math.floor(1 + Math.random() * 9);
const students = Math.floor(1 + Math.random() * 9);
const allStudent = classrooms * students;
let desks;

if (students % 2 === 0) {
    desks = allStudent / 2;
} else {
    desks = (allStudent + classrooms) / 2;
}

console.log(`Классов: ${classrooms}
Учеников: ${students}
Нужно купить парт: ${desks}\n`);

//-------------------------------------------

console.log('Задание 5\n');

let randTempr1 = Math.floor(199 + Math.random() * 602);
const randTempr2 = Math.random();

while ( randTempr1 % 10 !== 0) {
    ++randTempr1;
}

const mainRandTempr = (randTempr1 + randTempr2).toFixed(6);

console.log(`Прогноз погоды на TerraRandomis ${mainRandTempr} C`);

