# Amber Clinic App

# How to run
    Running using Docker:
        docker build -t sample:dev .
	
        docker run \
        -it \
        --rm \
        -v ${PWD}:/app \
        -v /app/node_modules \
        -p 3001:3000 \
        -e CHOKIDAR_USEPOLLING=true \
        -e WDS_SOCKET_PORT=0 \
        sample:dev