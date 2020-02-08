# source https://github.com/mingfang/docker-geekbench
FROM ubuntu:14.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y \
    python \
    python-setuptools \
    python-pip

RUN apt-get install -y git vim curl zsh build-essential wget
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs

# docker build -t compilerenv .
# docker run -it --name compilerenvcontainer -v /Users/jpc/Documents/CJ:/shared -p 80:80 -p 5000:5000  compilerenv