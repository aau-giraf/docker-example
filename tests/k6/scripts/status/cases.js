import { check } from "k6"
import http from "k6/http"
import {
    SIMPLE_URL,
    initCases,
} from "../index.js"

export function sucessful_status() {
    const url = `http://api_service:8080/api/v1/status`
    const response = http.get(url)

    check(response, {
        "sucessful_status: Status code is 200": (res) =>
            res.status === 200
    })

    return response
}

export const weightedCases = initCases([
    { weight: 100, case: sucessful_status }
])