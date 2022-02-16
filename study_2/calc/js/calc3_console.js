const container = document.querySelector('.container')
const result = document.querySelector('.resultLog')
const actions = document.querySelector('.actionsLog')
let arr = [];

container.addEventListener('click', function (event)  {
    if (event.target.closest('.btn-val') || event.target.closest('.btn-action')) {
    let target = event.target.innerHTML;
    arr.push(target);
    actions.innerHTML = arr.join(''); 
    }

    if (event.target.closest('.btn-result')) {
        result.innerHTML = argumentsForCalc();
        }

    if (event.target.closest('.btn-clear')) {
        arr = [];
        actions.innerHTML = '0';
        result.innerHTML = '0';
    }

    if (event.target.closest('.btn-backspace')) {
        if (arr.length === 1) {
            actions.innerHTML ='0';
        }
        else {
        arr.splice(-1,1)
        actions.innerHTML = arr.join('');
        }
    }
})  

function Calc (operation, a, b) {
    const isNotValid = isNaN(a) || isNaN(b);
    const operations = {
        sum: a+b,
        sub: a-b,
        div: a/b,
        mult: a*b,
    }
    if (isNotValid) {
        return ('error');
    }
    else {
        if (operation in operations) {
            return( operations[operation])
        }
        else {
            return ('Unknown operation')
        }

}
}

function argumentsForCalc() {
    for (let i = 0; i <arr.length; i++) {
        switch(arr[i]) {
            case '+':
                operation = 'sum';
                a = +(arr.slice([0], [i]).join(''))
                b = +(arr.slice([i+1], [arr.length]).join(''))
                return Calc(operation,a,b);
            case '–':
                    operation = 'sub';
                    a = +(arr.slice([0], [i]).join(''))
                    b = +(arr.slice([i+1], [arr.length]).join(''))
                return Calc(operation,a,b);
            case '×':
                operation = 'mult';
                a = +(arr.slice([0], [i]).join(''))
                b = +(arr.slice([i+1], [arr.length]).join(''))
                return Calc(operation,a,b);
            case '÷':
                operation = 'div';
                a = +(arr.slice([0], [i]).join(''))
                b = +(arr.slice([i+1], [arr.length]).join(''))
                return Calc(operation,a,b);
        }
    }
}

