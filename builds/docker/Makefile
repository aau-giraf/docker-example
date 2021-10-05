
IMAGENAME=docker-example:latest
DOCKER=docker
ROOTDIRECTORY=./../../
DOCKERFILEPATH=./Dockerfile

EXPOSEDPORT=8080
LISTENPORT=8080

# builds a new image from the source code.
.PHONY:
build:
	sudo $(DOCKER) build -t $(IMAGENAME) -f $(DOCKERFILEPATH) $(ROOTDIRECTORY) --compress --rm

# creates a writeable container from the image and prepares it for running.
.PHONY:
create:
	sudo $(DOCKER) create $(IMAGENAME)

# creates the container (same as docker create) and runs it.
.PHONY:
run: build
	sudo $(DOCKER) run -p $(EXPOSEDPORT):$(LISTENPORT) $(IMAGENAME)

# The same as "run" but with -it
#   The -it instructs Docker to allocate a pseudo-TTY connected to the container’s stdin; creating an interactive bash shell in the container.
# --interactive, -i: Keep STDIN open even if not attached
# --tty, -t: Allocate a pseudo-TTY
# What is a pseudo terminal? (tty/pty)
#   A device that has the functions of a physical terminal without actually being one.
#   Created by terminal emulators such as xterm. More detail is in the manpage pty(7).
.PHONY:
runit: build
	sudo $(DOCKER) run -p $(EXPOSEDPORT):$(LISTENPORT) -it $(IMAGENAME)

.PHONY:
images:
	sudo $(DOCKER) images

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
