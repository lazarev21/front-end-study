

/* function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted );
  alert( arr ); */

/* let arr = [5, 2, 1, -10, 8];
arr.sort(function(a,b) {return b-a})
console.log(arr) */

/* function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > b || arr[i] < a) {
            arr.splice(i,1);
        }
    }
}
let arr = [1,8,3,4];

filterRangeInPlace(arr,1,4);
console.log(arr);
 */

/* let arr = [1,2,3,4,5,6,7,8]
function filterRange (arr, a, b) {
    
    let newArr = arr.slice(a+1,b-1);
    console.log(newArr)
    console.log(arr)    
}
filterRange(arr,2,8) */

/* function camelize (str) {   
    return str
    .split('-')
    .map (
        (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1) 
    )
    .join('');
}



console.log(camelize("background-color")) */