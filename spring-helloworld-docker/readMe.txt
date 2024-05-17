1. Spring Boot Project
2. create build ---> on cmd go to project dir and type command mvn clean package 
3. create Dockerfile in root folder of your Project
4. create docker image : docker build -t <name of your image> .
5. verify with command docker images
6. run the image in docker container : docker run -p8088:8080 <image name>

 
