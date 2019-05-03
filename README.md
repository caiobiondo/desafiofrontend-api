####

Baixar projeto e rodar npm install

####

Instalar o docker CE

https://docs.docker.com/install/ (escolha a versão do OS correta)

executar comando "docker" 
- APresentando os comandos a instalação esta correta

- Baixar o container

docker pull mongo

- Subir o container

docker run --name mongodb -p 27017:27017 -d mongo

- confirmar imagem 

docker ps

####
Após processo acima executar comando abaixo:

-npm start
