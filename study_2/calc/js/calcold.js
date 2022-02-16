const container = document.querySelector('.container')
const result = document.querySelector('.resultLog')
const actions = document.querySelector('.actionsLog')
let arrayOfClicks = [];

container.addEventListener('click', function (event)  {
    if (event.target.closest('.btn-val') || event.target.closest('.btn-action')) {
        let target = event.target.innerHTML;
        arrayOfClicks.push(target); //создаем массив из значений, который накликал пользователь
        strActionLog = arrayOfClicks.join(''); //преобразуем в строку, чтобы было удобнее работать дальше
        actions.innerHTML = strActionLog;  //выводим в историю дейсвтий
    }

    if (event.target.closest('.btn-result')) {
        let strResultLog = String(argumentsForCalc()) //результат функции переводим в строку
        if (strResultLog.length > 5) { //меняем размер шрифта, если результат слишком длинный
            result.style['font-size'] = "48px"
            result.innerHTML = strResultLog;
        }   
        else {
            result.innerHTML = strResultLog;
        }
        }
        

    if (event.target.closest('.btn-clear')) { 
        arrayOfClicks = []; //обнуляем массив
        actions.innerHTML = '0'; //обнуляем историю действий
        result.innerHTML = '0'; //обнуляем результат
        result.style['font-size'] = "96px" //возвращем размер по умолчанию
    }

    if (event.target.closest('.btn-backspace')) {
        if (arrayOfClicks.length === 1) { //чтобы совсем не стирать историю оставляем значение 0
            actions.innerHTML ='0';
        }
        else {
        arrayOfClicks.splice(-1,1) //удаляем один последний элемент
        actions.innerHTML = arrayOfClicks.join('');
        }
    }
})  

function argumentsForCalc() {
    for (let i = 0; i <arrayOfClicks.length; i++) { //перебираем каждый элемент массива, пока не найдем действие
        switch(arrayOfClicks[i]) {
            case '+':
                operation = 'sum';
                a = +(arrayOfClicks.slice([0], [i]).join('')) //все что до дейсвтия - первое значение
                b = +(arrayOfClicks.slice([i+1], [arrayOfClicks.length]).join('')) //все что после дейсвтия - второе значение
                return Calc(operation,a,b); //возвращем результат функции с данными параметрами
            case '–':
                    operation = 'sub';
                    a = +(arrayOfClicks.slice([0], [i]).join(''))
                    b = +(arrayOfClicks.slice([i+1], [arrayOfClicks.length]).join(''))
                return Calc(operation,a,b);
            case '×':
                operation = 'mult';
                a = +(arrayOfClicks.slice([0], [i]).join(''))
                b = +(arrayOfClicks.slice([i+1], [arrayOfClicks.length]).join(''))
                return Calc(operation,a,b);
            case '÷':
                operation = 'div';
                a = +(arrayOfClicks.slice([0], [i]).join(''))
                b = +(arrayOfClicks.slice([i+1], [arrayOfClicks.length]).join(''))
                return Calc(operation,a,b);
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