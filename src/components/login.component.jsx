import React, { Component } from 'react'
import axios from 'axios';



export default class Login extends Component {
    
    componentDidMount(){
       
            // remove user from local storage to log user out
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
    }

    handleSubmit= e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password,
        };

        axios.post('auth/login', data).then(
            res => {
                console.log(res.data.user)
                localStorage.setItem('user',res.data.user)
                localStorage.setItem('token',res.data.tokens.access.token)    
                
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
            <h3>Login</h3>

            <div className='form-group'>
                <label>Email</label>
                <input type="email" className='form-control' placeholder='Email' onChange={e => this.email = e.target.value}/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" className='form-control' placeholder='Password' onChange={e => this.password = e.target.value}/>
            </div>

            <button className='btn btn-primary btn-block'>Login</button>
          </form>
      </div>
    )
  }
}
