const dbconnection = require("./mongodb");

//insertOne insert single  record and insertMany many record
const insertData = async () =>{
    console.log("insert function");
    const db = await dbconnection();
    const result = await db.insertMany([
        {
            name: 'Apple 12',
            brand: 'Apple',
            category: 'mobile'
        },
        {
            name: 'Apple 13',
            brand: 'Apple',
            category: 'mobile'
        }
    ]);
    //  console.log(result);
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}

insertData();