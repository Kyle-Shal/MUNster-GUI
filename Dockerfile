FROM ubuntu:22.04

RUN apt update
RUN apt upgrade -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN npm install -g n
RUN apt install wget
RUN n stable
RUN apt install python3 -y
COPY . /repo
WORKDIR /repo/munster
RUN apt install pip -y
RUN pip install selenium 
RUN pip install webdriver-manager
RUN pip install packaging