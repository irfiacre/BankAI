from langchain_ollama.llms import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from utils.vector import retriever

model = OllamaLLM(model="llama3.2")

template = """
You are a financial expert in analyzing and answering questions about any bank statement

Here are some bank statement transaction records: {records}

Here is a question to answer: {question}
"""

prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

while True:
    print("\n\n=====================================")
    question = input("Enter question (q for quit): ")
    if question == 'q':
        break

    result = chain.invoke({
        "records": retriever.invoke(question),
        "question": question
    })

    print(result)
