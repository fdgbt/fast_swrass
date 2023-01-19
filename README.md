# fast_swrass
Star Wars Rebels Alliance Search System  

## Env
Create the env folder before to start.  
```
mkdir env
cd env
touch node.env react.env
```

## Start
Start the Frontend and Backend container.  
```
docker-compose up
```

## Stop
Stop the Frontend and Backend container.  
```
docker-compose down
```

## Clean
Delete the Frontend and Backend Container, the internal network, the images and the associated Volume.  
It will not affect the source code.
```
docker-compose down -v

docker image prune -a

docker volume prune

docker network prune
```

## Usage
Open a web browser then go to: http://localhost:3000

## Screenshots
![search](https://user-images.githubusercontent.com/52746061/213400210-3cce7441-54d0-4980-9064-eb5459b74f50.png)  
![results](https://user-images.githubusercontent.com/52746061/213400293-124dcead-751b-4f26-8220-489501262e66.png)  
![details1](https://user-images.githubusercontent.com/52746061/213400332-cafc95b5-a8d5-437d-a3bd-5945e79a2cf0.png)  
![details2](https://user-images.githubusercontent.com/52746061/213400446-0d1ef028-2289-4ea1-9429-c77e9b2a3b10.png)  
![whookie](https://user-images.githubusercontent.com/52746061/213400481-b91b36b3-7af4-49ba-b2e6-8f7a94ab1cff.png)  
