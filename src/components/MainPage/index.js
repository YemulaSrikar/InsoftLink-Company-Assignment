// import {Component} from 'react'
import {FiMail} from 'react-icons/fi'
import {FaPhoneAlt} from 'react-icons/fa'
import {AiOutlineWhatsApp, AiOutlineMobile} from 'react-icons/ai'
// import Header from '../Header'
import './index.css'

const MainPage = () => (
  <div className="mainContainer">
    <div className="topItemsCont">
      <div className="icons-cont">
        <div className="websites">
          <div className="websites">
            <FaPhoneAlt className="icons" />
            <p className="phone-num">+91-9540349392</p>
          </div>
          <div className="websites">
            <FiMail className="icons" />
            <p className="mail-id">contact@schoolaura.com</p>
          </div>
        </div>
        <div className="right-side-items">
          <div className="apps wtsp">
            <AiOutlineWhatsApp className="app-icons" />
            <p className="apps-name">Whatsapp</p>
          </div>
          <div className="apps mobile-app">
            <AiOutlineMobile className="app-icons" />
            <p className="apps-name">Mobile-App</p>
          </div>
          <div className="login-reg-cont">
            <p className="login-reg">Login</p>
          </div>
          <div className="login-reg-cont">
            <p className="login-reg">Registration</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MainPage
