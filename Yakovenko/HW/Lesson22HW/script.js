let name = prompt("Как вас зовут?");
console.log("Привет, " + name + "!");

let years = prompt("Укажите год вашего рождения:");
const currentyear = 2020;
const yearsold = currentyear - years;
console.log("Ваш возраст: " + yearsold);

let side = prompt("Введите длину стороны квадрата:");
const sides = 4;
const p = side * sides;
console.log("Периметр квадрата = " + p);

let radius = prompt("Введите радиус окружности:");
let s = 2 * Math.PI * radius;
console.log("Площадь такой окружности = " + s);

let S = prompt("Введите расстояние в км между двумя городами:");
let t = prompt("Укажите время за которое вы хотите добраться:");
let V = S / t;
console.log("Чтобы успеть вовремя вам необходимо двигаться со скоростью "+ V + " км/час!");

let dollars = prompt("Введите количество долларов:");
const euro = 0.92;
let converted = dollars * euro;
console.log(dollars + " $ = " + converted + " €");

let memory = prompt("Введите объем флешки в Гб!");
let filesize = 820;
let quantity = (memory * 1024) / filesize;
console.log("Количество вмещаемых файлов размером 820MB состовляет = " + Math.floor(quantity));

let money = prompt("Введите сумму денег в кошильке:");
let chocolate = prompt("Введите цену одной шоколадки:");
let quantityclate = money / chocolate;
let restmoney = money % chocolate;
console.log("Количество шоколадок которое вы можете купить составляет: " + Math.trunc(quantityclate));
console.log("Остаток денег состовляет: " + restmoney);

let number = prompt("Введите трехзначное число:");
let result = 0;
while (number) {
    result = result * 10;
    result = result + number % 10;
    number = Math.floor(number / 10);
}
console.log("Ваше число в перевернутом виде = " + result);

let summ = prompt("Введите сумму вклада в банк на 2 месяца:");
let yearpercent = 5;
let yeartime = 12;
let deptime = 2;
let yourpercent =  (deptime * yearpercent) / yeartime;
yourpercent = yourpercent + 100;
let summpr = (summ * yearpercent) / 100;
console.log("Сумма начисленных процентов состовляет = " + summpr);
