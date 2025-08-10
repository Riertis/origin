//-----------------------------------------
let userArray = ['max', 'john', 123, null];
let separatSymbol = '_';

function logJoin(array, separatSymbol) {
    const separatResult = array.join(separatSymbol);
    console.log(separatResult);
}

logJoin(userArray, separatSymbol);

userArray = [1,2,3]
separatSymbol = '-';

logJoin(userArray, separatSymbol);

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

function setNickname(user, newNickname) {
    user.nicknameHistory.push(user.nickname);
    user.nickname = newNickname;
}


const user = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };
console.log(user);
setNickname(user, 'Александр');
console.log(user);
setNickname(user, 'Саша');
console.log(user);

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------


function add(list, userItem) {
    if (!list.includes(userItem))
   list.push(userItem)
}

const list = [];
add(list, 'Картошка');
add(list, 'Капуста');
add(list, 'Морковь');
add(list, 'Картошка');
add(list, 'Лук');
add(list, 'Морковь');

console.log(list); // [ 'Картошка', 'Капуста', 'Морковь', 'Лук' ]

const list2 = [];
add(list2, 3);
add(list2, 4);
add(list2, 4);
add(list2, 4);
add(list2, 3);
add(list2, 2);

console.log(list2); // [ 3, 4, 2 ]

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

const list3 = [
    'Молоко',
    'Хлеб',
    'Картошка',
    'Капустка',
    'Сок',
];

list3.push('Ветчина')
list3.push('Помидоры')
list3.push('Огурцы')

console.log(list3);

list3.pop();
console.log(list3);

let res = 'Ве'
let a = 'тч'
res += a;
a = 'ина';
res += a;

console.log(res);

console.log(list3.includes(res));

res = ''.repeat(res.length);
a = 'ок'
res += a;
a = ['с']
res = a[0] + res;

console.log(list3.indexOf(res));
console.log( list3[list3.length - 1].length * 3 );

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

const divider = '----------';

 const cheque = {
     drinks: ['Молочный коктейль']
 }

 //блок food

if ('food' in cheque) {
    if (cheque.food.includes('Сырный суп') && (!cheque.food.includes(('Хлеб')))) {
        if ('snacks' in cheque) {
            if (!cheque.snacks.includes('Хлеб')) {
                cheque.snacks.push('Хлеб')
            }
        } else {
            cheque.snacks = ['Хлеб'];
        }
    }
    if (cheque.food.includes('Бургер') && (!cheque.food.includes(('Картошка Фри')))) {
        if ('snacks' in cheque) {
            if (!cheque.snacks.includes('Картошка Фри')) {
                cheque.snacks.push('Картошка Фри')
            }
        } else {
            cheque.snacks = ['Картошка Фри'];
        }
    }
console.log(divider);
console.log(`Основные блюда (${cheque.food.length}): `)
console.log(cheque.food.join(', '));
}


//блок snacks

if ( 'snacks' in cheque) {
    console.log(divider);
    console.log(`Закуски (${cheque.snacks.length}): `)
    console.log(cheque.snacks.join(', '));
}

//блок drinks

if ( 'drinks' in cheque) {
    console.log(divider);
    console.log(`Напитки (${cheque.drinks.length}): `);
    console.log(cheque.drinks.join(', '));
    if ( cheque.drinks.includes('Пиво')) {
        console.log('‼️ Внимание: Есть алкоголь!')
    }
}

console.log(divider);

//-------------------------------------------
console.log('-------------------------------');
//-------------------------------------------

const array1 = [null, undefined, '', '', NaN, 1, -16, true, false];
const array2 = [];

const ruslan = 'Ruslan-2';
const age = 100;
const array3 = [ruslan, array2, { length: 777 }, 'some string', -500 / 100, age * 10, [1], array1];

const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9, 10] ];

console.log('--- Группа 1 ---');
console.log(array3[4] * array3[5]);
console.log(array3[4], array3[6]);
console.log([1, 2, 3][2]);

console.log('--- Группа 2 ---');
console.log(array3.length);
console.log(array3[array3.length - 1].length);
console.log(array3[2].length);
console.log(array3[array3.length -1].length * array3[4] - array3[5] / ruslan.length);
console.log((array3[7][6] + 6) * age - array2.length + array3[3].length * matrix[2][3]);

console.log('--- Группа 3 ---');
console.log([6, 3, 9][2]);
console.log(matrix[1]);
console.log(matrix[1][1]);
console.log(matrix[0][0] * matrix[2][3]);
console.log([ [8, 3], [2, 6] ][0][1]);

console.log('--- Группа 4 ---');
const m =[[[[777]], 555], 666]; //Поспрашивать
console.log(m[0][0][0][0]);
console.log(m[1]);
console.log(m[0][1]);

