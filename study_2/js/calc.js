
let action = prompt ('введите действие', '');
let num1 = +prompt ('введите первое значение', '');
let num2 = +prompt ('введите второе значение', '');
let result = 0;


checkParametrs (action, num1, num2);

switch ((checkParametrs(action, num1, num2))) {
    case true:
        calc (action, num1, num2);
        break;  
    default:
        alert ('error');
}

function checkParametrs (action, num1, num2) {
    if (action == '' 
    || action == null 
    || num1 == '' 
    || num1 == null 
    ||num2 == '' 
    || num2 == null 
    || isNaN(num1) 
    || isNaN(num2) 
    ) 
    {
     return false;
    }
    else {
        return true;
    }
    } 
    
function calc (action, num1, num2) {
switch (action) {
    case 'sum' :
        alert ('Ваш результат: ' + (result = num1 + num2));
        break;

    case 'sub' :
        alert ('Ваш результат: ' + (result = num1 - num2));
        break;

    case 'deg':
        alert ('Ваш результат: ' + (result = num1 ** num2));
        break;
    
    case 'mult':
        alert ('Ваш результат: ' + (result = num1 * num2));
        break;

    case 'del':
        alert ('Ваш результат: ' + (result = num1 / num2));
        break;

    case 'ostatok':
        alert ('Ваш результат: ' + (result = num1 % num2));
        break
    
    default:
        alert ('unknown operation');
}
}


/* function calc (action, a, b) {
    if (action == 'sum') {
        result = a + b;
        alert ('Ваш результат: ' + result);
    }
    else if (action == 'sub') {
        result = a - b;
        alert ('Ваш результат: ' + result);
    }   
    else if (action == 'deg') {
        result = a**b;
        alert ('Ваш результат: ' + result);
    }
    else if (action == 'mult') {
        result = a * b;
        alert ('Ваш результат: ' + result);
    }
    else if (action == 'del') {
        result = a / b;
        alert ('Ваш результат: ' + result);
    }
    else if  (action == 'ostatok') {
        result = a % b;
        alert ('Ваш результат: ' + result);
    }
    else {
        alert ('Ваш результат: ' + result);
    }
} */



/* 
checkParametrs (action, a, b);

if ((checkParametrs(action, a, b))) {
    calc (action, a, b);
}
else {
    alert ('errrrrror');
}
 */
