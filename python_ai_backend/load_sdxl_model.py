from diffusers import StableDiffusionPipeline
import torch


from flask import Flask, request, send_file

app = Flask(__name__)

model_id = "sd-legacy/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")


@app.route("/generate", methods=["POST"])
def generate():
    prompt = request.json.get("prompt")
    image = pipe(prompt).images[0]
    filename = "generated.png"
    image.save(filename)
    return send_file(filename, mimetype="image/png")


if __name__ == "__main__":
    app.run(port=5000)
