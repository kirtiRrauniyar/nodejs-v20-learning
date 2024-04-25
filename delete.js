const dbconnection = require("./mongodb");

//deleteOne delete single first record and deleteMany Delete all matched record
const deleteData = async () => {

    console.log('delete data');
    let db = await dbconnection();
    let result = await db.deleteMany(
        {name:'Mi-12'}
    )
    if(result.acknowledged)
    {
        console.log(result);
        console.log("data delete one firtt record");
    }
    

}
deleteData();