
BUILDPATH=./builds
BUILDDIRS=docker

DEPLOYMENTPATH=./deployments
DEPLOYMENTDIRS=docker-compose

help:
	@echo 'Target structure: _ (underscores) seperates and - (dash) does not'
	@echo 'Examples:'
	@echo '  Build docker image: "make docker_build'
	@echo '  Run docker: "make docker_run'
	@echo '  Deploy docker-compose: "make docker-compose_up'
	@echo ''
	@echo '-- make help-builds --'
	$(MAKE) help-build
	@echo ''
	@echo '-- make help-deployments --'
	$(MAKE) help-deployment

help-build:
	@(for dir in $(BUILDDIRS); do \
		echo $${dir}
		echo -n '  '
		$(MAKE) -s -C $(BUILDPATH)/$$dir help; \
		echo ''
	done)

help-deployment:
	@(for dir in $(DEPLOYMENTDIRS); do \
		echo $${dir}
		echo -n '  '
		$(MAKE) -s -C $(DEPLOYMENTPATH)/$$dir help; \
		echo ''
	done)

.ONESHELL:
.SILENT:
.PHONY:
%:
	$(eval argv=$(subst _, , ${MAKECMDGOALS})) \
	$(if $(filter $(firstword $(argv)),$(BUILDDIRS)), \
		$(eval build=$(word 1, $(argv))) \
		$(eval target=$(word 2, $(argv))) \

		$(info Building: $(build)) \
		$(info Target: $(target)) \

		$(MAKE) -C $(BUILDPATH)/$(build) $(target)
	)
	$(if $(filter $(firstword $(argv)),$(DEPLOYMENTDIRS)), \
		$(eval deployment=$(word 1, $(argv))) \
		$(eval target=$(word 2, $(argv))) \

# TODO: Only build docker image if we deploy.
#   Right now we always do it, even on "docker-compose_down"
		$(MAKE) docker_build
		$(info Deploying: $(deployment)) \
		$(info Target: $(target)) \

		$(MAKE) -C $(DEPLOYMENTPATH)/$(deployment) $(target)
	)