import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


function tareaPresenter(tarea){
    if(tarea!=null){
        <Card>
            <CardBody>
                <CardTitle>{tarea.titulo}</CardTitle>
                <CardText>
                    <h6>Prioridad: </h6> {tarea.prioridad}
                    <h6>Vencimiento: </h6> {tarea.vencimiento}
                    <h6>Finalizado: </h6> {tarea.vencimiento ? "si": "no"}
                </CardText>
            </CardBody>
        </Card>
    }else{
        return(<div></div>)
    }
}

export default tareaPresenter;