function readNumber() {
    let num;
    
    do {
        num = prompt()
    } while (!isFinite(num))

    if (num === null || num === '') return null

    return +num
}
//Случайное число от min до max
function random(min, max) {
    return min + Math.random() * (max - min);
  }