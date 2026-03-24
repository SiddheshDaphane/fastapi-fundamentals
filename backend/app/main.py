from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None

app = FastAPI()

@app.get("/")
async def root():
    return {"msg": "Hello World"}

@app.post("/createposts")
async def create_posts(post: Post):
    return {"data": post.dict()}