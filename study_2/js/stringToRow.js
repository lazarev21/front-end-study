// Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.


function showVerticalMessage (str) {
    const MAX_LENGTH = 10;
    const FIRST_LETTER = 'м';
    let stringToRow = ``
    if (str.length > MAX_LENGTH) {
        str = (str.slice(0, MAX_LENGTH))
    }

    if (str[0] === FIRST_LETTER ) {
    str = str[0].toUpperCase() + str.slice(1);
}
    for (let char of str) {
        stringToRow += `${char}\n`
}      
console.log (stringToRow)

}
showVerticalMessage('марафон')

