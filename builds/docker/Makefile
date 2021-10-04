
IMAGENAME=docker-example:latest
DOCKER=docker
ROOTDIRECTORY=./../../
DOCKERFILEPATH=./Dockerfile

EXPOSEDPORT=8080
LISTENPORT=8080

.PHONY:
build:
	sudo $(DOCKER) build -t $(IMAGENAME) -f $(DOCKERFILEPATH) $(ROOTDIRECTORY) --compress --rm

.PHONY:
create: build
	sudo $(DOCKER) create $(IMAGENAME)

.PHONY:
run: create
	sudo $(DOCKER) run -p $(EXPOSEDPORT):$(LISTENPORT) $(IMAGENAME)

.PHONY:
runit: create
	sudo $(DOCKER) run -p $(EXPOSEDPORT):$(LISTENPORT) -it $(IMAGENAME)

.PHONY:
push: build
	@echo 'Not implemented yet'

.PHONY:
pull:
	@echo 'Not implemented yet'

.PHONY:
dist_clean: build_clean
.PHONY:
build_clean:
	sudo $(DOCKER) rm -f $(IMAGENAME) 2> /dev/null
