import express from "express";
import path from "path";

const userRouter = express.Router();

function delay() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

userRouter
  .route("/")
  .get(function (req, res) {
    res.send("<h1>hello world</h1>");
  })
  .post(async function (req, res) {
    const prompt = req.body.prompt?.replace(/\s+/g, " ").trim();

    if (!prompt) {
      return res
        .status(400)
        .json({ error: "Prompt must not be empty or only whitespace." });
    }
    console.log("Received prompt:", prompt);

    // await delay();

    // const iamgepath =
    //   "c:/dev/final_year_project/backend/fyp_backend/public/pizza.jpeg";
    // res.sendfile(iamgepath);

    try {
      const imageResponse = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      if (!imageResponse.ok) {
        return res.status(500).send("Failed to fetch image from Python server");
      }
      // Read response as buffer
      const imageBuffer = await imageResponse.arrayBuffer();
      const buffer = Buffer.from(imageBuffer);

      res.setHeader(
        "Content-Type",
        imageResponse.headers.get("Content-Type") || "image/jpeg"
      );
      res.send(buffer);
    } catch (error) {
      console.error("Error proxying image:", error);
      res.status(500).send("Internal server error");
    }
  });
export default userRouter;
