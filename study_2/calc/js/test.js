arr = [1,0,0,'-',5,7]
abc()

function abc() {
    for (let i = 0; i <arr.length; i++) {
        switch(arr[i]) {
        /*     case '+':
                operation = 'sum';
                a = +(arr.slice([0], [i]).join(''))
                b = +(arr.slice([i+1], [arr.length]).join(''))
                console.log(Calc(operation,a,b));
                console.log(a)
                console.log(b)
                console.log(operation)
         */
         case '-':
                operation = 'sub';
                a = +(arr.slice([0], [i]).join(''))
                b = +(arr.slice([i+1], [arr.length]).join(''))
                console.log(Calc(operation,a,b));
                console.log(a)
                console.log(b)
                console.log(operation)
        /*
            case '×':
                operation = mult;
                a = arr.slice([0], [i]).join('')
                b = arr.slice([i+1], [arr.length-1]).join('')
                return Calc(operation,a,b);
            case '&divide;':
                operation = div;
                a = arr.slice([0], [i]).join('')
                b = arr.slice([i+1], [arr.length-1]).join('')
                return Calc(operation,a,b); */
        }
    }
}

function Calc (operation, a, b) {
    const isNotValid = isNaN(a) || isNaN(b);
    const operations = {
        sum: a+b,
        sub: a-b,
        div: a/b,
        mult: a*b,
    }
    if (isNotValid) {
        return alert('error');
    }
    else {
        if (operation in operations) {
            return( operations[operation])
        }
        else {
            return alert('Unknown operation')
        }

}
}