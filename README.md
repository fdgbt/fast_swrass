# fast_swrass
Star Wars Rebels Alliance Search System  

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
![login](https://user-images.githubusercontent.com/52746061/213005648-2fd476b4-4c97-4bc6-b594-385d3aafe604.png)  
![research](https://user-images.githubusercontent.com/52746061/213005669-e2401cf0-e76e-47ed-b164-da6397aefef5.png)  
![results](https://user-images.githubusercontent.com/52746061/213005682-aa934654-6797-472c-9f2e-7a9972c3a8e4.png)  
![Detailed Card](https://user-images.githubusercontent.com/52746061/213005689-90822325-c01d-4b47-ae4e-683d0e2ef85f.png)  
