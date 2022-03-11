import React, { Component} from 'react'
import axios from 'axios';
import Card from 'react-credit-cards';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "react-credit-cards/es/styles-compiled.css";

// import required modules
import { EffectCards } from "swiper";

export default class AllCards extends Component {

    state ={
        cards: []
    }

    componentDidMount() {
        const config = {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        };
    
        axios.get('/cards', config).then(
          res => {
            console.log(res.data.results);
            this.setState({ cards: res.data.results})
          },
          err => {
            console.log(err);
          }
        )
        
      }
  render() {
    return (
      <div>
          <h1>AllCards</h1>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">

             {this.state.cards.map((cards, i) => 
                    <SwiperSlide key={i}>
                        <Card
                        name={cards.cardHolder}
                        number={cards.cardNumber}
                        expiry={cards.cardExpiration}
                        issuer={cards.category}
                        cvc="737"
                        />
                    </SwiperSlide>
                )
                }   
                
            </Swiper>
            <hr style={{ margin: "10px 0 10px" }} />
          <div className='row'>
                        <div className='col-6'>
                            <Link to="/addcards">
                                    <button type="button" className="btn btn-primary btn-block">
                                        Add Cards
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
    )
  }
}
