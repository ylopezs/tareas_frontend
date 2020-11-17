import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
 
class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            nombre: '',
            email: '',
            password:''
        }
    }

    componentDidUpdate(){
        if(this.props.isLoged){
            return <Redirect to="/dashBoard" />
        }
    }
 
  // handle button click of login form
  handleRegister = () => {
    this.props.register(this.state);
    
  }
    render(){
        return (
            <div className="container">
              Registrar<br /><br />
              <Col md={12}>
                <form onSubmit={() => this.handleRegister()}>
                    <Row className="form-group justify-content-center">
                        Nombre<br />
                        <input type="text"  id="nombre" name="nombre"
                            value={this.state.nombre}
                            placeholder="Tu nombre"
                            className="form-control"
                            onChange={event=> this.setState({nombre: event.target.value})} />
                    </Row>
                    <Row className="form-group justify-content-center">
                        Email<br />
                        <input type="email" id="email" name="email"
                            value={this.state.email}
                            placeholder="Tu email"
                            className="form-control"
                            onChange={event=> this.setState({email: event.target.value})} />
                    </Row>
                    <Row className="form-group justify-content-center" style={{ marginTop: 10 }}>
                        Password<br />
                        <input type="password" id="password" name="password"
                            value={this.state.password}
                            placeholder="Introduce contraseña"
                            className="form-control"
                            onChange={event=> this.setState({password: event.target.value})} 
                        />
                    </Row>
                    <Row>
                        {this.props.errMss && <><small style={{ color: 'red' }}>{this.props.errMss}</small><br /></>}<br />
                        <input type="button" value={this.props.isLoading ? 'Cargando...' : 'Registrar'} disabled={this.props.isLoading} /><br />
                    </Row>
                </form>
              </Col>
            </div>
          );
    }

}
 
export default Register;