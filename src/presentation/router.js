'use strict'

import { Router } from 'express'
const router = Router()

import getUsers from './getUsers.js'
import getStatus from './getStatus.js'
import postUser from './postUser.js'


router.get('/api/v1/status', getStatus)
router.get("/api/v1/users", getUsers)
router.post("/api/v1/users", postUser)

export default router