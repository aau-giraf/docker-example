'use strict'

import User from "../domain/User.js"
import { userRepository } from "../infrastructure/InMemoryUserRepository.js"

export default (req, res, next) => {
    const newUser = new User(
        req.body.firstName,
        req.body.lastName,
        req.body.age,
        req.body.email,
    )
    userRepository.insertUser(newUser)
    res.status(201).send(JSON.stringify(
        {
            "id": newUser.id
        }
    ))
}