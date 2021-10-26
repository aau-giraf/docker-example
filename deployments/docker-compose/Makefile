# Documentation regarding the docker-compose CLI which we are interfacing
#   can be found here: https://docs.docker.com/compose/reference/

# Troubleshooting:
#   1. networks are already created with a "bridge" driver so docker stack cannot "deploy"
#     solution: Run "docker network prune" to remove the unuse network.

COMPOSEFILEPATH=./docker-compose.yml
DOCKER=docker
DOCKERCOMPOSE=docker-compose
DOCKERSWARM=docker swarm
DOCKERSTACK=docker stack
STACK=docker-example

help:
	@echo 'Targets (docker-compose):'
	@echo '  build                         - Builds images in the docker-compose. yml file'
	@echo '  up                            - Builds, (re)creates, starts, and attaches to containers for a service'
	@echo '  create                        - Builds, (re)creates, starts, and attaches to containers for a service without starting it'
	@echo '  down                          - Stops containers and removes containers, networks, volumes, and images created by up'
	@echo 'Targets (docker stack):'
	@echo '  init                          - Makes the node a manager, this is requried for the "deploy" and "rm" targets'
	@echo '  leave                         - Removes the node from the swarm'
	@echo '  deploy                        - Deploys the stack $(STACK) as a new stack or updates the existing stack'
	@echo '  rm                            - Removes the $(STACK) stack'

# builds the containers using their individual dockerfiles or downloads the images.
#   --parallel: Allows concurrency when building/pulling
build:
	sudo $(DOCKERCOMPOSE) build --parallel

# Builds, (re)creates, starts and attaches containers for a service.
#   --build: Runs possible builds which can be configured in the compose file.
#     An example where "build" is defined can be seen here: https://docs.docker.com/compose/gettingstarted/#step-3-define-services-in-a-compose-file
#   --remove-orphans: Removes services which are not defined by the compose file.
up:
	sudo $(DOCKERCOMPOSE) up --build --remove-orphans

# Stops and removes all containers configured by the docker-compose.
#   --volumes: old persistent volumes are removed. This can be undesireable
#     since we might want to work on the same data over different sessions.
down:
	sudo $(DOCKERCOMPOSE) down --volumes

# Initializes the node a s docker swarm manager.
init:
	sudo $(DOCKERSWARM) init

# Forces the node to leave the docker swarm.
#   --force: If this is not defined then the node is just marked as "down" in the swarm.
#     For a development environment this is desireable, but for other environemnt this is dangerous,
#     because it can lead to a non-quorum of managers. For this usecase, one have to assign a worker or
#     add a new node and assign it as a manager role. And then forfully leave.
leave:
	sudo $(DOCKERSWARM) leave --force

# Creates a stack based on the configuration
#   --compose-file: the path to the compose file which is the spec for the stack. 
deploy:
	sudo $(DOCKERSTACK) deploy --compose-file $(COMPOSEFILEPATH) $(STACK)

# Removes the stack from the swarm.
rm:
	sudo $(DOCKERSTACK) rm $(STACK)