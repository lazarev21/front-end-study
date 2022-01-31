// Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.


function showVerticalMessage (str) {
    const maxlength = 10;
    const firstLetter = 'м';
    let stringToRow = ``
    if (str.length > 10) {
        str = (str.slice(0, maxlength))
    }

    if (str[0] === firstLetter ) {
    str = str[0].toUpperCase() + str.slice(1);
}
    for (let char of str) {
        stringToRow += `${char}\n`
}      
console.log (stringToRow)

}
showVerticalMessage('марафон')

