'use strict'

import { v4 as uuidv4 } from 'uuid'

export default class User {
    constructor(firstName, lastName, age, email) {
        this.id = uuidv4()
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }
}