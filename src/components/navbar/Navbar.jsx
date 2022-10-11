import React from 'react'
import { useState } from 'react'
import "./navbar.scss"
import Logo from "../../assets/skyWaveLogo.png"
import {BiWalletAlt} from "react-icons/bi"
import {FaBars, FaTimes} from "react-icons/fa"
import Web3 from 'web3'

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
  const [wallet, setWallet] = useState('Connect Wallet')
  const [walletSvg, setWalletSvg] = useState('')

  const connectWallet = async() =>{
    
    return new Promise(async (resolve,reject)=>{
      let web3
      if(window.ethereum){
        web3 = new Web3(window.ethereum)
      }else{
        console.log('please download');
      }

      try {
        await window.ethereum.request({method : 'eth_requestAccounts'})
        resolve(web3)
      } catch (error) {
        reject(error)
      }
    })

  }

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
          <a onClick={async()=>{
            const web3 = await connectWallet();
            const walletAddress = await web3.eth.requestAccounts();
            setWallet(walletAddress[0])
            setWalletSvg('none')
          }}> <BiWalletAlt display={walletSvg}/> {wallet}</a>
        </div>
      </ul>

      <div className="navbar__button" onClick={() => setShowMenu(true)}>

        <div className="connect-wallet-prompt">
          <a onClick={async()=>{
            const web3 = await connectWallet();
            const walletAddress = await web3.eth.requestAccounts();
            setWallet(walletAddress[0])
            setWalletSvg('none')
          }}> <BiWalletAlt display={walletSvg}/> {wallet}</a>
        </div>

        <div className="navbar__hamburger">
          <FaBars />
        </div>
      </div>


      

    </nav>
  )
}

export default Navbar