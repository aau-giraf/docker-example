import http from 'k6/http';

import { check, sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    minIterationDuration: "1s",
    vus: 500,
    duration: "100m",
};

export default function() {
  let res = http.get('http://nginx/api/v1/status');

    check(res, { 'success status': (r) => r.status === 200 });
}