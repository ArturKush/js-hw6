'use strict'

let arrayOne = [5, 6, 7]
arrayOne[1] = 10
console.log(arrayOne);


let arrStr =['One', 'Two', 'Three']
arrStr.push('Fourth')
console.log(arrStr);


let arrSum =[1, 2, 3, 4]
let sum = 0
for(let i = 0; i < arrSum.length; i++) {
    sum +=arrSum[i]
}
console.log(sum);


let number = [1, 2, 3, 4, 5]
for(any of number) {
    console.log(any);
}

let arrayTwo = ['One', 'Two', 'Three', 'Fourth', 'Five']
for(any of arrayTwo) {
    if(any.length > 5) {
        console.log(any);
    } else {
 continue;
    }
}


 let myNumb = [5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560]
 let fullNumb = myNumb[0];

 for (let i = 1; i < myNumb.length; i++) {
   if (myNumb[i] > fullNumb) {
     fullNumb = myNumb[i];
   }
 }
 
 console.log(fullNumb);


let twixNumb =[55, 36, 72, 51, 125, 52]
for(soloNumb of twixNumb) {
    if(soloNumb % 2 !== 0) {
        continue
    }
    console.log(soloNumb);
}