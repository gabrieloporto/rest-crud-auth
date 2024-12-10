import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexion exitosa al servidor de MongoDB");
  } catch (err) {
    console.log("Error de conexion a la base de datos", err);
    process.exit(1);
  }
};

export default connectDB;
