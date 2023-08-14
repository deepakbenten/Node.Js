let fs=require('fs');

//write file
// fs.writeFile('myText.txt','This is node js', function(){
//     console.log('Tesk Done')
// })

//append file
// fs.appendFile('myCode.txt','Code file line 1\n',function(){
//     console.log("file append");
// })

//read File
// fs.readFile('db.json','utf-8',function(err,data){
//     console.log(data)
// })


//file rename
// fs.rename('myCode.txt','mydata.txt',function(err){
//     if(err) throw err;
//     console.log('file rename')
// })

//file delete
fs.unlink('mydata.txt',(err)=>{
    if(err) throw err;
    console.log('file deleted')
})

// let data=fs.readFileSync('mydata.txt','utf-8')
// console.log(data)