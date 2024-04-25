const dbconnection = require("./mongodb")

// to handle promises use then function or async await function 
dbconnection().then((resp) => {
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})

// const main = async () =>{
//     let data = await dbconnection();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();