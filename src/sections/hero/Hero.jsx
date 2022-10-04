import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero__container .padding">
          <div className="hero__content">
            <h1 className="hero__title">Skywave</h1>
            <p className="hero__text">
              Skywave is a decentralized marketplace for NFTs. <br /> Where you can Buy and sell NFTs from the world’s top artists
            </p>
            <div className="hero__button">
              <a href="/">Connect Wallet</a>
            </div>
          </div>
        </div>

        <div className="hero__image">
          <img src="https://img.seadn.io/files/cd36c4e444975311c4b2d3c114a21c1d.png?fit=max&w=1000" alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero