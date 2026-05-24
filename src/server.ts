 import dotenv from 'dotenv';
 dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
 });

 import mongoose from "mongoose";
 import server from "./app";

 mongoose
 .connect(process.env.MONGO_URL as string, {})
 .then((data) => {
    console.log("Mongodb connection succed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
        console.log(`The server is running succesfuly on port:${PORT}`);
        console.log(`Admin project on http://localhost:${PORT}/admin \n`)
    });
 })
 .catch((err)=> console.log("Error on connection Mongodb",err));
 
  