let marks={
    deepak:78,
    geeta:80,
    lokesh:99,
    mamta:70

    
}
// for(let i=0; i<Object.keys(marks).length;i++){
//     console.log("The marks of " +Object.keys(marks[i]+" are "+ marks[Object.keys(marks)[i]]) )
// }

for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key]);
    //console.log("The marks of " + Object)
}