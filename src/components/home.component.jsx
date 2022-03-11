import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {

  // componentDidMount() {
  //   const config = {
  //     headers: {
  //       Authorization: 'Bearer ' + localStorage.getItem('token')
  //     }
  //   };

  //   axios.get('/cards', config).then(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

  render() {
    return (
      <div>
         <hr style={{ margin: "50px 0 0px" }} />
                    <div className='row'>
                        <div className='col-6'>
                            <Link to="/allcards">
                                    <button type="button" className="btn btn-primary btn-block">
                                        All Cards
                                    </button>
                            </Link>
                        </div>
                        <div className='col-6'>
                            <Link to="/addcards">
                                <button type="button" className="btn btn-primary btn-block">
                                    Add Cards
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
    )
  }
}
