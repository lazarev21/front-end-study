let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
            for (let j = 1; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            console.log(i);
}   


/* firstFor: for (let num = 0; num < 3; num++ ) {
    for (let size = 0; size <3; size++) {
        if (size == 2) {
            continue firstFor;
        }
    console.log(size);
    }
    } */


/* for (let i = 0; i < n; i++) {
    if (i % i != 0 && i % 1 == 0)
}
 */

/* let i 
do { 
    i = prompt ('введите число больше 100', '');
} while ( i <= 100 && i) */



/* for (let i = 0; i <= 10; i++) {

    if (i % 2 == 0) {

    alert (i);
}
}


for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } */
/* let i = 0;

  while (i < 3) {
    alert( `number ${i}!` );
    i++
  } */