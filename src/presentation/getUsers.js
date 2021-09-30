'use strict'

import { userRepository } from "../infrastructure/InMemoryUserRepository.js"

export default (req, res) => {
    const users = userRepository.getUsers()
    res.status(200).send(JSON.stringify(users))
}