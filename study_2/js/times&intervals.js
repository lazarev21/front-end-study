function printNumbers (from, to) {
    let i = from;
    setTimeout(function alertI(){
        alert(i)
        if (i < to) {
            setTimeout (alertI, 1000);
        }
        i++
    }, 0
    )

}

printNumbers(1,5) 
