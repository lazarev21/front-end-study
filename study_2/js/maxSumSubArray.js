function getMaxSubSum(arr) {
    myArray = arr;
    let subSum = 0;
    let maxElementArray = 0;

    for (let i = 0;  i < myArray.length; i++ ) {
        let count = 0
        if (+arr[i] > 0) {
            count ++
        }
        if (count === 0) { 
            subSum = 0;
        } 
    }

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > maxElementArray) {
            maxElementArray = myArray[i];
        }
    }
    numberOfMaxElement = myArray.indexOf(maxElementArray)
    
    subMyArray = []
    for (let i = numberOfMaxElement - 1 ; i >-1; i--) {
        while (true) {
           if( Math.abs(myArray[i-2]) > Math.abs(myArray[i-1]) ) break
           else {
        subMyArray.push(myArray[i])
        console.log(subMyArray)
        }
    }
    }



    console.log(myArray)
    console.log(maxElementArray)
    console.log(numberOfMaxElement)
}

getMaxSubSum([1, -2, 9, 5, 3])

