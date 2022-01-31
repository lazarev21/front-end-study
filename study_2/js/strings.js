//Усечение строки

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength

function truncate (str, maxlength) {
if (str.length >= maxlength) {
    let truncateStr = `${str.slice(0,maxlength)}…`
    return truncateStr
}
return (str)
}
console.log(truncate('ffffffffffffffffffffffffffffffffffffffff',10))
console.log(truncate('ffffffffffffffffffffffffffffffffffffffff',100)) 


//функция проверки на спам
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

/* function checkSpam(str){ 
    let lowerStr = str.toLowerCase();
return (lowerStr.includes('viagra') || lowerStr.includes ('xxx')) 
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit")) */

//функция делается первый символ строки заглавным

/* function ucFirst (str) {
    if (!str) return str; // проверка на пустую строку

    return str = str[0].toUpperCase() + str.slice(1);
}
 */