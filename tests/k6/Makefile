help:
	@echo 'Requirement: Remember to run the API docker-compose in deployments'
	@echo 'Targets (docker-compose):'
	@echo '  test                          - Test the spike_test for status'

test:
	sudo K6_TEST_FILE=/scripts/status/spike_test.js docker-compose up
	@echo 'Grafana localhost:3000, import dashboard "2587"'
