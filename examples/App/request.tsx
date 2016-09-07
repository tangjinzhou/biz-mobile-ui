
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

interface Window {
  fetch?: any;
}
declare var window: Window;
export default function request(url:string, options?:any) {
  return window.fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}
