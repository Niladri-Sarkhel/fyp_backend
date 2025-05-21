import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import userRouter from "./routes/user.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

if (process.env.ENV_MODE !== "dev") {
  app.use(cors());
} else {
  app.use(cors({ origin: "http://localhost:5173" }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const frontend_dist_path = path.resolve(
  __dirname,
  "../../../frontend/fyp_frontend/dist"
);
console.log("Resolved path to frontend:", frontend_dist_path);

if (process.env.ENV_MODE !== "dev") {
  app.use(express.static(frontend_dist_path)); // adjust path if needed
}

app.use("/api/generate", userRouter);

if (process.env.ENV_MODE !== "dev") {
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve(frontend_dist_path, "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`server started at http://localhost:${PORT}`);
});
