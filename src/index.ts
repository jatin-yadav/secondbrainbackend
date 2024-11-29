import express from "express";
import connectDB from "./db/connect";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Connected succesfully!");
});

app.post('/signup',(req,res)=>{})
app.post('/login',(req,res)=>{})

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL as string);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
