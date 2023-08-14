
const prompt = require("prompt-sync")();


let a=prompt('enter the number : ');
a=Number.parseInt(a);

switch(a){
    case 1:
        console.log('my name is deepak --1');
        break;
    case 2:
        console.log('my name is lokesh --2');
    default:
        console.log('sorry we are out of ${a}')
}