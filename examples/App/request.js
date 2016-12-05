import 'whatwg-fetch'
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error['response'] = response;
  throw error;
}

function jsonToQueryString(json) {
  return Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
      }).join('&');
}
/*interface Window {
  fetch?: any;
}
declare var window: Window;*/
export default function request(url, options) {
  return fetch(url, {
      method: 'POST',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: jsonToQueryString(options)})
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}
