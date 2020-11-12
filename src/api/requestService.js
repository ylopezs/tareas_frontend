import axios from 'axios';

/**
 * @param  {[string]} url        
 * @param  {[string]} method     
 * @param  {[JSON]} payload     
 * @param  {[string]} headers   
 * @return {[JSON]}             
 */
function request(url, method, headers, payload) {
  return new Promise((resolve, reject) => {
    const metodosPermitidos = ['GET', 'POST', 'PUT', 'DELETE'];
    if (metodosPermitidos.indexOf(method.toLowerCase()) < 0) {
      throw new Error(`Solo se permiten los siguientes metodos: \n ${metodosPermitidos}`);
    } else {
      axios({
        method,
        url,
        data: payload,
        headers
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
}

export default request;