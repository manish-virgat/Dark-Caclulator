let input = document.querySelector('.calculator input');
let button = document.querySelector('.calculator button');
disable();
function number1(){input.value += '1';}
function number2(){input.value += '2';}
function number3(){input.value += '3';}
function number4(){input.value += '4';}
function number5(){input.value += '5';}
function number6(){input.value += '6';}
function number7(){input.value += '7';}
function number8(){input.value += '8';}
function number9(){input.value += '9';}
function number0(){input.value += '0';}
function slash(){input.value += '.';}
function empty(){
    input.value = '';
    disable();
}
function plus(){input.value += ' + ';}
function minus(){input.value += ' - ';}
function times(){input.value += ' * ';}
function div(){input.value += ' / ';} 
function calculate(){
    if (input.value!=0){
        let total = eval(input.value);
        input.value = total;
    }
}
function enable(){
    for (var i = 1; i<7; ++i){
        document.getElementById(`disable$(i)`).disabled = false;
    }
}
function disable(){
    for (var i = 1; i<7; ++i){
        document.getElementById(`disable$(i)`).disabled = true;
    }
}