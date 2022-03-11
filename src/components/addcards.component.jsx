import React from "react";
import Card from "react-credit-cards";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

export default class AddCards extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };
  

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    console.log(formData);
    this.form.reset();
    const config = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
        },
        data: JSON.stringify ({
            "name":`${this.state.name}`,
            "cardExpiration": `${this.state.expiry}`,
            "cardHolder":`${this.state.name}`,
            "cardNumber": `${this.state.number}`,
            "category": 'VISA'
        })
      };
    
      axios('/cards', config).then(
        res => {
          console.log(res);
         
        },
        err => {
          console.log(err);
        }
      )

  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <h1>Add Credit Cards</h1>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
              {/* <button className="btn btn-primary btn-block" onClick={this.createCard(this.state)}>Create</button>  */}

          </form>
          <hr style={{ margin: "10px 0 10px" }} />
          <div className='row'>
                        <div className='col-6'>
                            <Link to="/allcards">
                                    <button type="button" className="btn btn-primary btn-block">
                                        All Cards
                                    </button>
                            </Link>
                        </div>
                        <div className='col-6'>
                            <Link to="/">
                                <button type="button" className="btn btn-primary btn-block">
                                    Home
                                </button>
                            </Link>
                            
                        </div>
                        <hr style={{ margin: "10px 0" }} />

                        <div  className='row'>
                            <Link to="/login">
                                <button type="button" className="btn btn-danger btn-block ">
                                Logout
                                </button>
                            </Link>
                        </div>
                    </div>
          
        </div>

      </div>
    );
  }
}
