let mark = [10,20,30,40,50]
console.log(mark);
console.log(mark[0])
console.log(mark[1])
console.log(mark[2])
console.log(mark[3])
console.log(mark[4])
console.log(mark.length)
console.log('-------------------------------------')
for(let i=0; i<mark.length; i++){
    console.log(mark[i])
}
console.log('------------------------------------')
console.log(mark[0,2])
console.log('-------------------------------------------')

let n=mark.toString();
console.log(typeof n)

console.log('-------------------------------------------')
let j=mark.join(',')
console.log(j)
console.log('-------------------------------------------')
let p=mark.pop(2,15)
console.log(p)
console.log(mark)



console.log('-------------------------------------------')
let pu=mark.push(3,4)
console.log(pu)
console.log('-------------------------------------------')
let m= mark.shift();
console.log(m)
console.log('-------------------------------------------')
let us= mark.unshift();
console.log(us)
console.log('-------------------------------------------')
delete mark[0]

console.log(mark)
console.log(mark.length)
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]

const compare = (a,b) =>{
    return b-a
}

console.log(arr1.concat(arr2,arr3))
let num=[15 ,25,32,62,41,25,87]
num.sort(compare)
console.log(num)

let arra=[41,52,21,62,85,47,25]
arra.splice(2,3,1000, 2000,5000,4000)
console.log(arra)

let num1=[15 ,25,32,62,41,25,87]
num1.forEach((Element)=>{
    console.log(Element*Element)
});

let name = "deepak";
let array=Array.from(name);
console.log(array)
console.log('----------------------------------')

for(let i of num1){
    console.log(i)
}
console.log('------------------------------')

for(let i in num1){
    console.log(num[i])
}