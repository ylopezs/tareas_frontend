import * as path from './ConstApi';
import request from './requestService';

export function registrar(name, email, password) {
    const requestBody = {
      'name': name,
      'email': email,
      'password': password
    };
    return request(
      path.register,
      'POST',
      {
        'Content-Type': 'application/json',
      },
      requestBody
    )
      .then(response => {
        localStorage.setItem("userToken", response.data.token)
        //localStorage.setItem("userRole", response.data.role)
        //localStorage.setItem("userEmail", email)
        localStorage.setItem("expiresIn", response.data.expiresIn);
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }
  
  export function login(email, password) {
    const requestBody = {
      'email': email,
      'password': password
    };
    return request(
      path.login,
      'POST',
      {
        'Content-Type': 'application/json',
      },
      requestBody
    )
      .then(response => {
        localStorage.setItem("userToken", response.data.token)
        localStorage.setItem("expiresIn", response.data.expiresIn);
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }

  export function logout(){
      localStorage.clear("userToken");
      localStorage.clear("expiresIn");
  }

  export function getToken(){
    return localStorage.getItem("userToken");
  }
