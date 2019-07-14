/**
 * 
 * @param {} option 
 * url:     request url
 * method:  request method
 * header:  request header
 * query:   request query
 * body:    request body
 * extra:   extra request params
 * 
 */
export default function(option) {
  const { url: _url = '', method = 'GET', headers = {}, query = {}, body = {}, ...extra } = option;
  const url = _mergeQuery2Url(_url, query);
  return fetch(url, {
    method,
    headers,
    body,
    ...extra,
    }).then(res => ({
      error: 0,
      data: res.json()
    })).catch(error => ({
      error: 1,
      data: error,
    }));

}


// merge query
function _mergeQuery2Url(url, query) {
  url += '?';
  Object.keys(query).forEach(key => {
    url += `&${key}=${query[key]}`;
  });
  return url;
}

