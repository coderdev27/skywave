import React from 'react'
import { useContext } from 'react'
import "./buymodal.scss"
import { ModalContext } from '../../hooks/ModalContext'


const BuyModal = () => {
  const {closeModal, selectedNft} = useContext(ModalContext)

  return (
    <div className='buyModal' onClick={closeModal}>
      <div className='buyModal__content'>
        <div className='buyModal__content__header'>
          <h1 className='center'>Place a Bid</h1>
        </div>

        <hr />

        <div className='buyModal__content__body'>
          <div >
            <p>You bid must be more than {selectedNft.price}</p>
          </div>

          <input className='buyModal__input' type="text" />

          <div className='buyModal__content__body__left'>
            Make sure you have enough ETH in your wallet to complete this transaction plus the gas fee
          </div>
        </div>

        <div className='buyModal__content__footer'>
          <button className='buyModal__button'>Buy/Bid</button>
        </div>
      </div>
    </div>
  )
}

export default BuyModal