//map
let arr=[45,23,20]
let a=arr.map((value, index, Array)=>{
    console.log(value, index, Array)
    return value + index;
})
console.log(a)

//filter

let arr1 = [15,2,5,9,20,7,25]
let b=arr1.filter((value)=>{
    return 10<value;
});
console.log(b)

//reduce
let arr2=[1,2,3,4,5,2]
const c=(value,a)=>{
    return value+a
}
let d = arr2.reduce(c)
console.log(d)