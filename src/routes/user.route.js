import express from "express";

const userRouter = express.Router();

userRouter.route("/").post(async function (req, res) {
  const prompt = req.body.prompt?.replace(/\s+/g, " ").trim();

  if (!prompt) {
    return res
      .status(400)
      .json({ error: "Prompt must not be empty or only whitespace." });
  }
  console.log("Received prompt:", prompt);

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
