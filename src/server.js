import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";

dotenv.config();


const app = express();
app.use(cors({origin: "http://localhost:5173",}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/generate", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`server started at http://localhost:${PORT}`);
});
