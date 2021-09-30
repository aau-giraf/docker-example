'use strict'

export default (req, res) => {
    res.status(200).send(JSON.stringify({
        status: "healthy"
    }))
}