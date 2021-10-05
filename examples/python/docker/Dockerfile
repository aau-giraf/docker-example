#python version is 3.6.6
FROM python:jessie

# Everything NOT ignored by .gitignore will be copied
COPY . .

WORKDIR /app

# Installing the requirements for this build
RUN python3 -m pip install -r ./requirements.txt

# Setup the exposed tcp port by the API
EXPOSE 5000/tcp

# root __main__.py
ENTRYPOINT [ "python3", "../." ]
