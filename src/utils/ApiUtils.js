import 'whatwg-fetch';

export const request = (url, options) =>
  new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => resolve(response.json()))
      .catch(reject);
  });
