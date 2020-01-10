import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Nom</label>
                <input type="text" id="name" className="FormField__Input"  name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Adresse email</label>
                <input type="email" id="email" className="FormField__Input"  name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="ecole">Nom de l'école</label>
                <input type="text" id="ecole" className="FormField__Input" name="ecole" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Mot de passe</label>
                <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="passwordConfirmation">Confirmer votre mot de passe</label>
                <input type="text" id="passwordConfirmation" className="FormField__Input"  name="passwordConfirmation" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
              <label className="FormField__Label" htmlFor="passwordConfirmation">Vous etes :</label>

              <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /> Homme
              <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /> Femme
              </div>
            

              

              <div className="FormField">
                  <button className="FormField__Button mr-20">Envoyer</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
