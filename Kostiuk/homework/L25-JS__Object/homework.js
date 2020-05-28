// 1  Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


const car = {
    make: 'ford',
    model: 'escape',
    year: '2015',
    speed: 80,
}

let carInfo = () => {
    console.log(car.make);
    console.log(car.model);
    console.log(car.year);

}

// carInfo();

let estTime = (distance) => {

   let time = distance / car.speed;

    // console.log(time);
let haveRest = () => {
    if (time % 4 == 0) {
        let rest = time / 4;
        // console.log(rest);
        let time2 = time + rest;
        return time2;

    }
    else {
        return time;

    }

}
   
    console.log(haveRest());
   
}
// estTime(320);


// console.log(estTime(1600));
 


// 2 Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2 - х объектов - дробей;

// Функция вычитания 2 - х объектов - дробей;

// Функция умножения 2 - х объектов - дробей;

// Функция деления 2 - х объектов - дробей;

// Функция сокращения объекта - дроби.


const fraction = {
    numerator: 2,
    denominator: 1 / 10,
}

console.log(fraction);

let plus = () => {
    let result = fraction.numerator + fraction.denominator;
    return result;
}

console.log('plus:', plus());

let minus = () => {
    let result = fraction.numerator - fraction.denominator;
    return result;
}

console.log('minus:', minus());


let multiplay = () => {
    let result = fraction.numerator * fraction.denominator;
    return result;
}

console.log('multiplay:', multiplay());

let devide = () => {
    let result = fraction.numerator / fraction.denominator;
    return result;
}

console.log('devide:', devide());

let cutting = () => {
    let result1 = fraction.numerator / 2;
    let result2 = fraction.denominator * 2;
    let result = result1 * result2;
    return result;
}

console.log('cutting:', cutting());

// 3   Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

//     Учтите, что в последних 3 - х функциях, при изменении одной части времени, может измениться и другая.Например, если ко времени «20: 30: 45» добавить 30 секунд, то должно получиться «20: 31: 15», а не «20: 30: 75».

const timer = {
    hours: 11,
    minutes: 15,
    seconds: 20,
}

console.log(timer);

let showTime = () => {
    console.log(`"${timer.hours}:${timer.minutes}:${timer.seconds}"`);
    
}

showTime();



let changeSeconds = (timer, sec) => {
    for (let key in timer) {
        if ( key == 'seconds') {
            timer[key] += sec;
        }
    }
}

changeSeconds(timer, 20);


let changeMinutes = (timer, min) => {
    for (let key in timer) {
        if (key == 'minutes') {
            timer[key] += min;
        }
    }
}

changeMinutes(timer, 10);


let changeHours = (timer, hrs) => {
    for (let key in timer) {
        if (key == 'hours') {
            timer[key] += hrs;
        }
    }
}

changeHours(timer, 2);
console.log(timer);

console.log('========');
showTime();

