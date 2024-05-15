import mongoose from "mongoose";
import colors from "colors";

const dbCOnnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);

    console.log(
      `Connected To MongoDb Database ${connect.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error In MongoDb ${error}`.bgRed.white);
  }
};


export default dbCOnnect