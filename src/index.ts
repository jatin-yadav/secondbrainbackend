import express from "express";
import connectDB from "./db/connect";
import * as dotenv from "dotenv";
import { usersRouter } from "./routes/user.routes";
import { contentRouter } from "./routes/content.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json(
    "Wellcome to My Secon Brain where you can store and manage your links"
  );
});

app.use("/api/v1/user", usersRouter);
app.use("/api/v1/content", contentRouter);

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
