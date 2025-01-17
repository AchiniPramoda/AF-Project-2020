import React from "react";
//import logo from './lg5.png';
import styled from 'styled-components';
import { HiLocationMarker} from "react-icons/hi";
import {HiMailOpen} from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";
import {ImWhatsapp} from "react-icons/im";
import { ImSkype } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { HiPhone} from "react-icons/hi";
import Calen from '../calendars/calen.jsx';


const Footer = () => {
return (
	<MainContainer>

<footer>
<div class="main-content">
        <div class="left box">
          <h2>About us</h2>
          <div class="content">
            <p>
                          The Lats year of the  Sri  Lankan  Institute of
                           Information and  technology university students
                           must complete a research project  realated   to
                           thier perticular degree.  This web site is  for 
                           the students and management to manage thier work
                           in a  proper manner.  .

            </p>
            <div class="social">
			  <a href="https://www.facebook.com/sliit.lk/"><span class="fab fa-youtube"><ImFacebook2 className='card-text text-end text-danger mt-3 mb-3'/></span></a>
			  <a href="https://www.youtube.com/user/SLIITtube?app=desktop"><span class="fab fa-youtube"><ImYoutube className='card-text text-end text-danger mt-3 mb-3'/></span></a>
              <a href="https://www.instagram.com/sliit.life/?hl=en"><span class="fab fa-instagram"><ImSkype className='card-text text-end text-danger mt-3 mb-3'/></span></a>
              <a href="https://lk.linkedin.com/school/sliit/"><span class="fab fa-youtube"><ImLinkedin className='card-text text-end text-danger mt-3 mb-3'/></span></a>
            </div>
          </div>
        </div>

		<div class="center box">
          <h2>Services</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Assigment 
             </span>
            </div>
			<div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">Marking Schemas</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">Panels</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">Live Chat</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">Notices</span>
            </div>
          </div>
        </div>
        <div class="center box">
		
                       
          <h2> Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text"><HiLocationMarker className='card-text text-end text-danger mt-3 mb-3'/>SLIIT Malabe </span>
            </div>
            <div class="phone">
			
              <span class="fas fa-phone-alt"></span>
              <span class="text"><HiPhone className='card-text text-end text-danger mt-3 mb-3'/>011-9808969</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text"><HiMailOpen className='card-text text-end text-danger mt-3 mb-3'/>  info@sliit.lk </span>
            </div>
          </div>
        </div>

		
        <div class="right box">
          <h2>Calendar</h2>
          <div class="content">
            <Calen/> 
         </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Created By <a href="https://cdazzdev.com/">© Copyright 2022.</a> | </span>
          <span class="far fa-copyright"></span><span>  All Rights Reserved by Ceylon Dazzling Dev Holding (PVT) LTD.</span>
        </center>
      </div>
	  </footer>
	</MainContainer>	
);
};
export default Footer;
const MainContainer = styled.header`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  color: #d9d9d9;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.content1{
  position: relative;
  margin: 130px auto;
  text-align: center;
  padding: 0 20px;
}
.content1 .text{
  font-size: 2.5rem;
  font-weight: 600;
  color: #202020;
}
.content1 .p{
  font-size: 2.1875rem;
  font-weight: 600;
  color: #202020;
}
footer{
  
  bottom: 0px;
  width: 100%;
  background: #111;
}
.main-content{
  display: flex;
}
.main-content .box{
  flex-basis: 50%;
  padding: 10px 20px;
}
.box h2{
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
}
.box .content{
  margin: 20px 0 0 0;
  position: relative;
}
.box .content:before{
  position: absolute;
  content: '';
  top: -10px;
  height: 2px;
  width: 100%;
  background: #1a1a1a;
}
.box .content:after{
  position: absolute;
  content: '';
  height: 2px;
  width: 15%;
  background:#3571f2;
  top: -10px;
}
.left .content p{
  text-align: justify;
}
.left .content .social{
  margin: 20px 0 0 0;
 
}
.left .content .social a{
  padding: 0 30px;
}
.left .content .social a span{
  height: 40px;
  width: 40px;
  background: #1a1a1a;
  line-height: 40px;
  text-align: center;
  font-size: 28px;
  border-radius: 5px;
  transition: 0.3s;
}
.left .content .social a span:hover{
  background: black;
}
.center .content .fas{
  font-size: 1.4375rem;
  background: #1a1a1a;
  height: 45px;
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .content .fas:hover{
  background: #f12020;
}
.center .content .text{
  font-size: 1.0625rem;
  font-weight: 500;
  padding-left: 10px;
}
.center .content .phone{
  margin: 15px 0;
}
.right form .text{
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #656565;
}
.right form .msg{
  margin-top: 10px;
}
.right form input, .right form textarea{
  width: 100%;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
}
.right form input:focus,
.right form textarea:focus{
  outline-color: #3498db;
}
.right form input{
  height: 35px;
}
.right form .btn{
  margin-top: 10px;
}
.right form .btn button{
  height: 40px;
  width: 200%;
  border: none;
  outline: none;
  background:#3571f2;
  font-size: 1.0625rem;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;
}
.right form .btn button:hover{
  background:#3571f2;
}
.bottom center{
  padding: 12px;
  font-size: 0.9375rem;
  background: #151515;
}
.bottom center span{
  color: #656565;
}
.bottom center a{
  color: #3571f2;
  text-decoration: none;
}
.bottom center a:hover{
  text-decoration: underline;
}
@media screen and (max-width: 900px) {
  footer{
    position: relative;
    bottom: 0px;
  }
  .main-content{
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box{
    margin: 5px 0;
  }
}
	
`;
