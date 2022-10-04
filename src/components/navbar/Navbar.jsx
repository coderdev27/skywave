import React from 'react'
import { useState } from 'react'
import "./navbar.scss"
import Logo from "../../assets/skyWaveLogo.png"
import {BiWalletAlt} from "react-icons/bi"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [show, setShow] = useState(false)
  // show and hide navbar
  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  window.addEventListener('scroll', handleShow)

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className={show ? "navbar show" : "navbar"} >
      <div className="navbar__logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>  
      </div>

      <ul className={showMenu ? "navbar__menu showMenu" : "navbar__menu"}>
        {/* close mobile nav button*/}
        <div className="navbar__close" onClick={() => setShowMenu(false)}>
          <FaTimes className="navbar__closeIcon" />
        </div>

        <li className="navbar__item">
          <a href="/" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="/explore" className="navbar__link">
            Explore
          </a>
        </li>
        <li className="navbar__item">
          <a href="/explore" className="navbar__link">
            Collection
          </a>
        </li>

        <div className="navbar__button mobile_connect">
          <a href="/"> <BiWalletAlt /> Connect Wallet</a>
        </div>
      </ul>

      <div className="navbar__button" onClick={() => setShowMenu(true)}>

        <div className="connect-wallet-prompt">
          <a href="/"> <BiWalletAlt /> Connect Wallet</a>
        </div>

        <div className="navbar__hamburger">
          <FaBars />
        </div>
      </div>


      

    </nav>
  )
}

export default Navbar