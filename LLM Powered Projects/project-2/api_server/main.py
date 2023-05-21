from auth_token import AUTH_TOKEN
from fastapi import FastAPI,Response, Query
from starlette.responses import StreamingResponse
from diffusers import DiffusionPipeline
from fastapi.middleware.cors import CORSMiddleware
import torch
from torch import autocast
from io import BytesIO
import base64
import os

os.environ["TOKEN"] = AUTH_TOKEN

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)


device = "cuda"
model_id = "runwayml/stable-diffusion-v1-5"
pipe = DiffusionPipeline.from_pretrained(model_id, revision="fp16", torch_dtype=torch.float16, use_auth_token=os.environ["TOKEN"])
pipe.to(device)


# Recommended if your computer has < 64 GB of RAM
pipe.enable_attention_slicing()


@app.get("/")
async def root():
    return {"message": "Welcome to the Text-to-Image API!"}

@app.get("/generate", response_class=StreamingResponse)
async def generate(prompt: str = Query(..., description="Text prompt for image generation")): 
    # with autocast(device): 
    image = pipe(prompt, guidance_scale=8.5).images[0]

    image.save("testimage.png")
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    imgstr = base64.b64encode(buffer.getvalue())

    return Response(content=imgstr, media_type="image/png")