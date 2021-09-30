'use struct'

import User from "../domain/User.js"

export default class InMemoryUserRepository {
    constructor(users = undefined) {
        this._users = users ?? []
    }

    insertUser(user) {
        if (!user instanceof User) {

        }
        this._users.push(user)
        return user.id
    }

    getUsers() {
        return this._users
    }
}

export const userRepository = new InMemoryUserRepository()