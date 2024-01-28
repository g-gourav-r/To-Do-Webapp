import { ApiParamsTypes } from './api.types';

const createApiCall = (url: string, method: 'post') => (params: ApiParamsTypes = {}) => {
  let apiEndpoint = 'http://127.0.0.1:8000/' + url;

  const { body, urlParams, pathVariables } = params;

  if (urlParams) {
    apiEndpoint = `${apiEndpoint}?${new URLSearchParams(urlParams)}`;
  }

  if (pathVariables) {
    apiEndpoint = Object.keys(pathVariables).reduce(
      (acc, curr) => acc.replace(`{${curr}}`, String(pathVariables[curr])),
      apiEndpoint,
    );
  }

  return fetch(apiEndpoint, {
    method,
    body: JSON.stringify(body),
  }).then(async (res) => {
    const resp = await res.json();
    if (res.ok) return Promise.resolve(resp);
    return Promise.reject(resp);
  });
};

export default createApiCall;