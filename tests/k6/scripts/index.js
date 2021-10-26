import { Counter } from "k6/metrics"

export const PORT = 8080
export const PROTOCOL = "http"
export const SUBDOMAIN = "" // eg. 'www.'
export const ROOT_DOMAIN = "api_service"
export const TLD = "" // eg. '.com'
export const SIMPLE_URL = `${ROOT_DOMAIN}:${PORT}`
export const BASE_URL = `${PROTOCOL}://${SUBDOMAIN}${ROOT_DOMAIN}${TLD}:${PORT}`
export function buildUrl(basic, path) {
    if (path === undefined) {
        path = "";
    }
    return encodeURI(
        `${PROTOCOL}://${basic}@${SUBDOMAIN}${ROOT_DOMAIN}${TLD}:${PORT}${path}`
    );
}

export function initCases(cases) {
    for (const elemenet of cases) {
        const prefix = "iterations-";
        // counter has prefix to ensure they are grouped in the summary.
        elemenet.counter = new Counter(`${prefix}${elemenet.case.name}`);
    }
    return cases;
}

export function runCaseWeighted(weightedCases) {
    runTest(getWeightedElement(weightedCases));
}

let caseRoundRobinIndex = 0;
export function runCaseRoundRobin(weightedCases) {
    runTest(weightedCases[caseRoundRobinIndex++ % weightedCases.length]);
}

export function runTest(testCase) {
    testCase.case();
    testCase.counter.add(1);
}