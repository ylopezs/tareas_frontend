import * as path from './ConstApi';
import request from './requestService';

export function agregarTarea({titulo, prioridad, vencimiento, finalizado}) {
    let object = {
      titulo,
      prioridad,
      vencimiento,
      finalizado
    }
    return request(
      path.nuevatarea,
      'POST',
      {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      },
      object
    )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }

  export function tareas() {
    return request(
      path.tareas,
      'GET',
      {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }

  export function tarea(tareaid) {
    return request(
      path.tarea + tareaid,
      'GET',
      {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }

  export function eliminarTarea(tareaid) {
    return request(
      path.eliminarTarea + tareaid,
      'DELETE',
      {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }

  export function editarTarea({tareaid, titulo, prioridad, vencimiento, finalizado}) {
    let object = {
      titulo,
      prioridad,
      vencimiento,
      finalizado
    }
    return request(
      path.editarTarea+tareaid,
      'PUT',
      {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      },
      object
    )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw (error);
      });
  }