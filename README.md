# Bank AI
This platform that analyzes your bank statement by leveraging Generative AI agents technology

## Getting Started
### Pre requisites.
Install `OLLAMA` to run models used here locally ([Link](https://ollama.com/download))

Pull these new models:

```bash
ollama pull llama3.2
```

```bash
ollama pull mxbai-embed-large
```

### Install requirements

```bash
python3 -m venv venv && source venv/bin/activate 
```
> If it does not work just create a virtual environment and activate it

```bash
pip3 install -r requirements.txt
```

### Start main application

```bash
python3 main.py
```

### What's next:
- [ ] Add UI input using Graphana or any frontend framework.
