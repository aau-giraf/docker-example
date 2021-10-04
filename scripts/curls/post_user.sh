curl \
--request POST \
--data '{ "firstName": "Andreas", "lastName": "Brandhøj", "age": 22, "email": "some@email.com" }' \
--header "Content-Type: application/json"\
--url http://localhost:8080/api/v1/users
