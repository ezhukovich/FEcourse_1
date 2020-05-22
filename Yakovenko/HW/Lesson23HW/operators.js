let yearsOld = prompt('Введите ваш возраст:');
 if(yearsOld > 0 && yearsOld <= 2){
     console.log('Вы ребенок!');
 } else if(yearsOld >= 12 && yearsOld < 18){
     console.log('Вы подросток!');
} else if(yearsOld >= 18 && yearsOld < 60){
    console.log('Вы взрослый!');
} else if(yearsOld >= 60){
    console.log('Вы пенсионер!');
} else{
    console.log('Мы не знаем что вы такое!)');
}

let symbol = prompt('Введите число от 0 до 9:');
switch(Number(symbol)){
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    default:
        console.log('Введите число от 0 до 9!');
        break;
}

let numberNew = prompt('Введите трехзначное число:');
let numberOne;
let numberTwo;
let numberThree;

numberOne = numberNew % 10;
numberNew = Math.floor(numberNew / 10);
numberTwo = numberNew % 10;
numberNew = Math.floor(numberNew / 10);
numberThree = numberNew % 10;

if(numberOne == numberTwo || numberOne == numberThree || numberTwo == numberThree){
    console.log('В вашем числе есть одиноковые цифры!')
} else{
    console.log('В вашем числе нет одинаковых цифр!')
}

let year = prompt('Введите год:');
let a = 400;
let b = 4;
let c = 100;
if(year % a == 0 && year % 4 == 0 && year % c > 0){
    console.log('Ваш год высокосный!');
}else{
    console.log('Ваш год невысокосный!');
}

let number5x = prompt('Введите пятиразрядное число:');
let numberA, numberB, numberC, numberD, numberE;

numberA = number5x % 10;
number5x = Math.floor(number5x / 10);
numberB = number5x % 10;
number5x = Math.floor(number5x / 10);
numberC = number5x % 10;
number5x = Math.floor(number5x / 10);
numberD = number5x % 10;
number5x = Math.floor(number5x / 10);
numberE = number5x % 10;

if(numberA == numberE && numberB == numberD){
    console.log('Ваше число является палиндромом!')
}else{
    console.log('Ваше число не является палиндромом!')
}

let usd = prompt("Введите количество долларов:");
let convertTo = prompt("Введите в какую валюту конвертировать(EUR UAH AZN):");
let converted;
const EUR = 0.92;
const UAH = 26.55;
const AZN = 1.7;
if(convertTo == 'EUR'){
    converted = usd * EUR;
    console.log(usd +' $ = '+ Math.floor(converted) +' €');
}else if(convertTo == 'UAH'){
    converted = usd * UAH;
    console.log(usd +' $ = '+ Math.floor(converted) +' ₴');
}else if(convertTo == 'AZN'){
    converted = usd * AZN;
    console.log(usd +' $ = '+ Math.floor(converted) +' ₼');
}

let price = prompt('Введите цену покупки:');
let priceAfter;
if(price >= 200 || price < 300){
    priceAfter = (price * 97) / 100;
    console.log('Цена после скидки состовляет = '+ priceAfter);
}else if(price >= 300 || price < 500){
    priceAfter = (price * 95) / 100;
    console.log('Цена после скидки состовляет = '+ priceAfter);
}else if(price >= 500){
    priceAfter = (price * 93) / 100;
    console.log('Цена после скидки состовляет = '+ priceAfter);
}


let okr = prompt("Введите длину окружности:");
let d = okr / Math.PI;
let prmtr = prompt("Введите периметр квадрата:");
let side = prmtr / 4;
if(side > d){
    console.log('Данная окружность поместиться в указанный квадрат!');
}else{
    console.log('Данная окружность не поместиться в указанный квадрат!');
}


let questionOne = prompt('Сколько будет 2 + 2?');
let questionTwo = prompt('Какой сейчас год?');
let questionThree = prompt('Сколько месяцев в году?');
let score = 0;
if(questionOne == 4){
    score += 2;
}else{
    score += 0;
}
if(questionTwo == 2020){
    score += 2;
}else{
    score += 0
}
if(questionThree == 12){
    score += 2;
}else{
    score += 0
}
console.log('Количество набранных баллов состовляет = '+ score);


let day = prompt('Введите день:');
let month = prompt('Введите месяц:');
let yearDate = prompt('Введите год:');
if(yearDate % 400 == 0 && yearDate % 4 == 0 && month == 2 && day == 28 || day == 29){
    if(month == 2 && day == 28){
        ++day;
        console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
    }else if(month == 2 && day == 29){
        ++month;
        day = 1;
        console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
    }
}else if(month == 1 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 1 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 2 && day < 28){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 2 && day == 28){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 3 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 3 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 4 && day < 30){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 4 && day == 30){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 5 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 5 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 6 && day < 30){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 6 && day == 30){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 7 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 7 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 8 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 8 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 9 && day < 30){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 9 && day == 30){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 10 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 10 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 11 && day < 30){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 11 && day == 30){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 12 && day < 31){
    ++day;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}else if(month == 12 && day == 31){
    ++month;
    day = 1;
    console.log('Следующуя дата: '+ day +'.'+ month + '.' + yearDate);
}















































