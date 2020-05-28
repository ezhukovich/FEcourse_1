
// 1  Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.


// const a = + prompt('Enter number1');

// const b = + prompt('Enter number2');


let compare = (a, b) => {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
       return 1; 
    }
    else {
        return 0;
    }

};

// console.log(compare(a, b));




//2.  Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(x) {
    return (x != 1) ? x * factorial(x - 1) : 1;
}

// console.log(factorial(7));


// 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// const a = + prompt('Enter number1');

// const b = + prompt('Enter number2');

// const c = + prompt('Enter number3');

let concat = (a, b, c) => {

    let number = + `${a}${b}${c}`;

    return number;

}

// console.log(concat(a, b, c));




// 7 Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// const hours = +prompt('Enter hours');

// const minutes  = +prompt('Enter minutes');

// const seconds = +prompt('Enter seconds');

let timeShow = () => {

    let  minTwoDigits = (n) => {
        return ('0' + n).slice(-2);
    }
    
    let showHours = (hours) => {

        if (hours >= 0 && hours < 24) {
            return `${minTwoDigits(hours)}`;

        }else {
            return `00`;
        }
    }

    let showMinutes = (minutes) => {

        if (minutes >= 0 && minutes < 60) {
            return `${minTwoDigits(minutes)}`;

        } else {
            return `00`;
        }
    }

    let showSeconds = (seconds) => {

        if (seconds >= 0 && seconds < 60) {
            return `${minTwoDigits(seconds)}`;

        } else {
            return `00`;
        }
    }

 return `«${showHours(hours)}:${showMinutes(minutes)}:${showSeconds(seconds)}»`;

            
}

// console.log(timeShow(hours, minutes, seconds));


// 8 Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


// const hours = +prompt('Enter hours');

// const minutes  = +prompt('Enter minutes');

// const seconds = +prompt('Enter seconds');

let translateToSeconds = () => {

    let translateHours = hours * 3600;

    let translateMinutes = minutes * 60;

    return translateHours + translateMinutes + seconds;

}

// console.log(translateToSeconds(hours, minutes, seconds));

// 9  Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// const seconds = +prompt('Enter seconds');

let secondsTo = (seconds) => {

    

    if (seconds < 3600 && seconds >= 0) {

        let hrs = '00';

        let  getminutes = Math.floor((seconds / 3600 - Math.floor(seconds / 3600)) * 60);

        let min = ('0' + getminutes).slice(-2);

        let getseconds = Math.round(((seconds / 3600 - Math.floor(seconds / 3600)) * 60 - getminutes) * 60);

        let sec = ('0' + getseconds).slice(-2);

        return `"${hrs}:${min}:${sec}"`;

    } else if (seconds >= 3600){

        gethours =  Math.floor(seconds / 3600);
        
         hrs = ('0' + gethours).slice(-2);

        getminutes = Math.floor((seconds / 3600 - Math.floor(seconds / 3600)) * 60);

        let min = ('0' + getminutes).slice(-2);

        getseconds = Math.round(((seconds / 3600 - Math.floor(seconds / 3600)) * 60 - getminutes) * 60);

        let sec = ('0' + getseconds).slice(-2);

        return `"${hrs}:${min}:${sec}"`;
        
    }
    else {

        console.log('Enter correct value of seconds!!!');
    }
}

// console.log(secondsTo(seconds));


// 10  Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».

// var day1 = +prompt('Enter day');

// var month1 = +prompt('Enter month');

// var year1 = +prompt('Enter year');



// var day2 = +prompt('Enter day');

// var month2 = +prompt('Enter month');

// var year2 = +prompt('Enter year');


let compareDate = (day1, month1, year1, day2, month2, year2) => {
    let correctMonth1 = month1 - 1;

    let correctMonth2 = month2 - 1;

    console.log(correctMonth1, correctMonth2);

    let date1 = new Date(year1, correctMonth1, day1); 
    
    let date2 = new Date(year2, correctMonth2, day2);
    
   let  seconds = (date2 - date1) / 1000;
    
  return  secondsTo(seconds);

}


// console.log(compareDate(05, 12, 2015, 8, 12, 2015));









// ==========test



// ============
