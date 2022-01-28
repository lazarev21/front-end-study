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
console.log(Calc('sum', 0, 0));
console.log(Calc('sub', 10, 5));
console.log(Calc('div', 10, 5));
console.log(Calc('diff', 10, 5));
console.log(Calc('div', 10, '5'));
console.log(Calc('div', 10, ));
console.log(Calc('div', 10, 'fff'));m


