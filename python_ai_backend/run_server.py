from flask import Flask, request, send_file
from diffusers import StableDiffusionPipeline
import torch

app = Flask(__name__)

# Load the model once
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1", torch_dtype=torch.float16
).to("cuda")

@app.route("/generate", methods=["POST"])
def generate():
    prompt = request.json.get("prompt")
    image = pipe(prompt).images[0]
    filename = "generated.png"
    image.save(filename)
    return send_file(filename, mimetype='image/png')

if __name__ == "__main__":
    app.run(port=5000)
