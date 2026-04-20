// * ЗАДАЧА 20 – переводим секунды В ЧАСЫ МИНУТЫ
// Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


function secToRealTime(seconds) 
{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const format = (num) => String(num).padStart(2, '0');
    return `${format(hours)}:${format(minutes)}:${format(secs)}`;
}

// * ЗАДАЧА 25 – таблица умножения
// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа.

function multiplication(number) 
{
    for (let i = 1; i <= 10; i++) 
    {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// * ЗАДАЧА 30 - Операторы "rest"
// 1. Создайте функцию "meanScore", которая будет
// принимать любое количество чисел (использовать rest)
// и возвращать среднее значение всех аргументов, округленное до 2 знаков после запятой.

function meanScore(...numbers) 
{
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return Math.round(average * 100) / 100; // округление до 2 знаков
}

// * ЗАДАЧА 33 – Объект дробь
// 1. Создать объект, хранящий в себе отдельно 
// числитель и знаменатель дроби, и следующие функции для работы с этим объектом.

// Функция для нахождения наибольшего общего делителя (НОД)

function gcd(a, b) 
{
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) 
    {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Функция для сокращения дроби
function reduceFraction(fraction) 
{
    const divisor = gcd(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / divisor,
        denominator: fraction.denominator / divisor
    };
}

// Функция сложения 2-х объектов-дробей.
function addFractions(fraction1, fraction2) 
{
    const numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    const denominator = fraction1.denominator * fraction2.denominator;
    return reduceFraction({ numerator, denominator });
}

// Функция вычитания 2-х объектов-дробей.
function subtractFractions(fraction1, fraction2) 
{
    const numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    const denominator = fraction1.denominator * fraction2.denominator;
    return reduceFraction({ numerator, denominator });
}

// Функция умножения 2-х объектов-дробей.
function multiplyFractions(fraction1, fraction2)
{
    const numerator = fraction1.numerator * fraction2.numerator;
    const denominator = fraction1.denominator * fraction2.denominator;
    return reduceFraction({ numerator, denominator });
}

// Функция деления 2-х объектов-дробей.
function divideFractions(fraction1, fraction2) 
{
    const numerator = fraction1.numerator * fraction2.denominator;
    const denominator = fraction1.denominator * fraction2.numerator;
    return reduceFraction({ numerator, denominator });
}

// * ЗАДАЧА 36 – сократить строку
// 1. Написать функцию, сокращения строки.
// Функция принимает строку и ее максимальную длину. Если длина строки больше, чем максимальная, 
// то необходимо отбросить лишние символы, добавив вместо них троеточие.

function truncateString(str, maxLength) 
{
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

//если что вывод красивый не делал чтобы не нагружать код

console.log(secToHour(777)); 

multiplication(5); 

console.log(meanScore(2, 4, 6, 8));

const frac1 = { numerator: 1, denominator: 2 }; 
const frac2 = { numerator: 1, denominator: 3 };   



console.log(addFractions(frac1, frac2));

console.log(subtractFractions(frac1, frac2)); 
console.log(multiplyFractions(frac1, frac2)); 
console.log(divideFractions(frac1, frac2));   

console.log(truncateString('Рандомный текст чисто для проверки', 12));