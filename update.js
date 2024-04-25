const dbconnection = require("./mongodb");


//updateOne update single first record and updateMany update all matched record
const updateData = async () =>{
    console.log('update data');
    let db = await dbconnection();
    const result = await db.updateMany(
        { name: 'Apple 88'},
        {
            $set: {name:'Mi-12',brand:'MI',}
        }

    );
    if(result.acknowledged)
    {
        console.log(result);
        console.log("data Updated");
    }
    
     
}
updateData();