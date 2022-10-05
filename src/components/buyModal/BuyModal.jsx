import React from 'react';
import { useContext, useState } from 'react';
import './buymodal.scss';
import { ModalContext } from '../../hooks/ModalContext';

const BuyModal = () => {
	const { closeModal, selectedNft } = useContext(ModalContext);
  const [showSmall, setShowSmall] = useState(false);

	const handleCloseModal = () => {
		closeModal();
	};

  const handleBuy = () => {
    setShowSmall(true);
  }

	return (
		<div className="buyModal" onClick={handleCloseModal}>
      {showSmall && (
       <div className="buyModal__small buyModal__content" onClick={(e) => e.stopPropagation()}>
        <p>Please Connect Your Wallet to Proceed</p>
        <button>Connect Wallet</button>
      </div>
      )}
      
      {!showSmall && (
			<div className="buyModal__content" onClick={(e) => e.stopPropagation()}>
				<div className="buyModal__content__header">
					<h1 className="center">Place a Bid</h1>
				</div>

				<hr />

				<div className="buyModal__content__body">
					<div>
						<p>You bid must be more than {selectedNft.price}</p>
					</div>

					<input className="buyModal__input" type="text" />

					<div className="buyModal__content__body__left">
						Make sure you have enough ETH in your wallet to complete this
						transaction plus the gas fee
					</div>
				</div>

				<div className="buyModal__content__footer">
					<button className="buyModal__button" onClick={handleBuy}>Buy/Bid</button>
				</div>
			</div>)}
		</div>
	);
};

export default BuyModal;
