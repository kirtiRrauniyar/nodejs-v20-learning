const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/appple.text`;

// fs.writeFileSync(filepath,'this is creating file with the help of writefilesynce mthod');//create file 

// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
// }) // reade file

// fs.appendFile(filepath,'and file name is apple.text',(err)=>{
//     if(!err) console.log("file text updated succesfully");
// }) //update file

// fs.rename(filepath,`${dirpath}/orrange.text`,(err)=>{
//     if(!err) console.log("file name updated succesfully");
// })

fs.unlinkSync(`${dirpath}/text.txt`)

