import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
 
import Register from './registerComponent';
import Login from './loginComponent';
import Dashboard from './dashBoardComponent';
import Home from './homeComponent';
import { regiter } from '../redux/actions/auth';

const mapStateToProps = state => {
    return {
      auth: state.auth,
      tareas: state.tareas,
    }
}

const mapDispatchToProps = dispatch => ({
    register: (email, name, password) => dispatch(regiter(email, name, password)),
  });


class Main extends Component {

    render(){
        const RegisterWithProps = () =>{ 
            return(
                <Register
                    errMss = {this.props.auth.errMess}
                    register = {this.props.register}
                    isLoading = {this.props.auth.isLoading}
                    isLoged = {this.props.auth.isLoged}
                     />
                ); 
        }
        return(
            <div>
            <div className="header">
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
              <NavLink activeClassName="active" to="/register">Registrarse</NavLink><small>(Access without token only)</small>
              <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
              <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={RegisterWithProps} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        );
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));