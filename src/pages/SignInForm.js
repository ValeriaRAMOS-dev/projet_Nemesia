import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logoPULV.png'; 
import LogoFb from './logoFb.png'; 
import LogoTwitter from './logoTwitter.png'; 
import LogoGoogle from './logoGoogle.png'; 

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Adresse email</label>
                <input type="email" id="email" className="FormField__Input" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Mot de passe</label>
                <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Se connecter</button> 
                  
              </div>

              <div className="FormField">
                <label className="FormField__autre" htmlFor="autre">Se connecter avec une autre compte</label>
                <div className="img">
                <img src={Logo}></img>
                <img src={LogoFb}></img>
                <img src={LogoTwitter}></img>
                <img src={LogoGoogle}></img>
                </div>
              </div>
              
            </form>
          </div>
        );
    }
}

export default SignInForm;
