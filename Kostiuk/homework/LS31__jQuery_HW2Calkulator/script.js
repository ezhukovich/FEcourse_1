$(document).ready(function(){
    $('#get_result').click(function () {
        let deposit = +($("#deposit").val());
        console.log('deposit',deposit);

        let percent = +($("#percent").val());
        console.log('percent', percent);

        let month = +($("#month").val());
        console.log('month', month);

        let result = (deposit * (percent / 100)) / 12 * month + deposit;
        console.log('result', result);

let resultSpan = $('#result');

console.log(resultSpan);

resultSpan.text(result);
                


     console.log('Hello');       })
})


