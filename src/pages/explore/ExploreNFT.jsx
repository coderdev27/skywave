import React from 'react'
import Header from '../../components/header/Header'
import "./explore.scss"
import {bayc, mayc, ghost} from "../../data/nftData"
import NftCard from '../../components/nftCard/NftCard'
import { ModalContext } from '../../hooks/ModalContext'
import { useState, useContext } from 'react'



const ExploreNFT = () => {
  const {showModal,
    setShowModal,
    selectedNft,
    handleShowModal, } = useContext(ModalContext)

  let all = [...bayc, ...mayc, ...ghost]

  return (
    <div>
      <Header main={"Explore All NFTs"} side={""} />

      <div className='padding grid'>
        {
          all.map((nft, index) => (
            <NftCard nft={nft} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default ExploreNFT