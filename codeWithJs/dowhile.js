const prompt = require("prompt-sync")();

let a=prompt("enter the number :")
a=Number.parseInt(a);
let i=0;
// while(i<a){
//     console.log(i);
//     i++
// }

do{
    console.log(i);
    i++;
}while(i<a)