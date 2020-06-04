let btn = document.getElementById('btn');
let redLight = document.getElementById('red-light');
let yellowLight = document.getElementById('yellow-light');
let greenLight = document.getElementById('green-light');
let counter = 0;
btn.onclick = function() {
    if (counter === 3){
        counter = 1
    } else {
        counter++;
    }
    
    //через if
    // if (counter === 1) {
    //     redLight.style.background = 'red';
    //     yellowLight.style.background = '';
    //     greenLight.style.background = '';
    // } else if (counter === 2) {
    //     yellowLight.style.background = 'yellow';
    //     redLight.style.background = '';
    //     greenLight.style.background = '';
    // } else if (counter === 3) {
    //     greenLight.style.background = 'green';
    //     yellowLight.style.background = '';
    //     redLight.style.background = '';
        
    // }

    // через тернарный оператор 
    redLight.style.background = counter === 1 ? 'red' : '';
    yellowLight.style.background = counter === 2 ? 'yellow' : '';
    greenLight.style.background = counter === 3 ? 'green' : '';
}
