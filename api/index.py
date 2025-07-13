from fastapi import FastAPI
from api.backend.utils.helpers import format_statement_data
from fastapi.middleware.cors import CORSMiddleware

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=origins,
    allow_headers=origins
)

@app.get("/api/py/helloFastApi")
def hello_fast_api():
    return {"message": "Hello from FastAPI"}

@app.get("/api/py/statement/")
def hello_fast_api():
    return {"result": format_statement_data()}
