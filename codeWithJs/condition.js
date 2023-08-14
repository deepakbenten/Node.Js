const prompt = require("prompt-sync")();

let a=prompt('Hy what is your age');
a=Number.parseInt(a);
if(a<0){
    console.log('this is invalid age..');
}else if(a==9){
    console.log('you are kid');
}else if(a<18 && a>=9){
    console.log('you are thing for drive..');
}else{
    console.log('you can now drive as you are above 18');
}
console.log('done')