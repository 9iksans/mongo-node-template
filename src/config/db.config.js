import mongoose from "mongoose";

class DbConnection{
    mongoConnect(){
        mongoose.connect(process.env.MONGODB, { authSource: "admin" }, function(error) {
            if (error) console.log(error)
            console.log("connected to mongoDB in " + process.env.MONGODB)
            // Check error in initial connection. There is no 2nd param to the callback.
          });
    }
}

export default DbConnection