import React from 'react'
import { useState, useContext } from 'react'
import BuyModal from '../../components/buyModal/BuyModal'
import NftCard from '../../components/nftCard/NftCard'
// import { useAPI } from '../../../hooks/useAPI'
import { nfts } from '../../data/nfts'
import "./latest.scss"
import { ModalContext } from '../../hooks/ModalContext'



const Latest = () => {
  const {showModal,
    setShowModal,
    selectedNft,
    handleShowModal } = useContext(ModalContext)
  return (
    <>
      {
        showModal && (
          <BuyModal selectedNft={selectedNft} showModal={showModal} setShowModal={setShowModal} />
        )
      }

      <div className='padding'>
        <h1 className='heading'>Latest</h1>
        <p className="subheading">Newly Minted NFT</p>

        <div className='latest'>
          <div className='grid'>
            {nfts.map((nft, index) => (
              <NftCard nft={nft} key={index} handleShowModal={() => handleShowModal(nft)} bid />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Latest