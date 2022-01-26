let operation = prompt ('Введите действие', '');
let a = +prompt ('Введите первое значение', '');
let b = +prompt ('Введите второе значение', '');

const operations = {
    sum: a+b,
    sub: a-b,
    div: a/b,
    mult: a*b,
}

Calc(operation);

function Calc (operation) {
    const isNotValid = a === '' || b === '' || operation === '' || isNaN(a) || isNaN(b);
    if (isNotValid) {
        alert('error');
    }
    else {
        if (operation in operations) {
            alert(operations[operation])
        }
        else {
            alert ('Unknown operation')
        }

}
}
