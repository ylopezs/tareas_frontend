import React, {Component} from 'react';
import { Row, Label, Col, Button} from 'reactstrap';

class tareaEditor extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: '',
            titulo: '',
            prioridad: '',
            vencimiento: '',
            finalizado: ''
        }
    }

    componentDidMount(){
        if(this.props.tarea.id){
            this.setState({
                id: this.props.tarea.id,
                titulo: this.props.tarea.titulo,
                prioridad: this.props.tarea.prioridad,
                vencimiento: this.props.tarea.vencimiento,
                finalizado: this.props.tarea.finalizado
            });


        }
    }

    handleSubmit(){

    }

    handleCancel(){

    }
    render(){
        return(
            <div classeName="container">
                <Row>
                    <Col md={12}>
                        <form onSubmit={() => this.handleSubmit()}>
                            <div className="contaimer">
                                <Row>
                                    <Col md={12}>
                                        <Row className="form-group justify-content-center">
                                            <Label htmlFor="titulo" className="text-center" md={12}>Titulo</Label>
                                            <input type="textarea" id="titulo" name="titulo"
                                                value={this.state.titulo}
                                                placeholder="¿Cual es tu tarea?"
                                                className="form-control"
                                                onChange={event=> this.setState({titulo: event.target.value})}
                                                />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Row className="form-group justify-content-center">
                                            <Label htmlFor="prioridad" className="text-center" md={6}>Prioridad</Label>
                                            <select value={this.state.prioridad} name="prioridad" id="prioridad"
                                                onChange={event=> this.setState({prioridad: event.target.value})}>
                                                <option value="Alta">Alta</option>
                                                <option value="Media">Media</option>
                                                <option value="Baja">Baja</option>
                                            </select>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row className="form-group justify-content-center">
                                          <Label htmlFor="vencimiento" className="text-center" md={6}>Vencimiento</Label>
                                          <input type="date" name="vencimiento" id="vencimiento" 
                                            value={this.state.vencimiento}
                                            onChange={event=> this.setState({vencimiento: event.target.value})} />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Row className="form-group justify-content-center">
                                            <Label htmlFor="finalizado" className="text-center" md={6}>Finalizado</Label>
                                            <input type="check" name="finalizado" id="finalizado"
                                                value={this.state.finalizado}
                                                onChange={event=> this.setState({finalizado: event.target.value})} 
                                            />
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                            <Button>Guardar</Button>
                                            <Button>Candelar</Button>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }

}