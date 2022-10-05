import React from 'react';
import './nftcard.scss';
import { FaEthereum } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { ModalContext } from '../../hooks/ModalContext';
import { useContext } from 'react';

const NftCard = ({ nft, index, bid }) => {
	const {handleShowModal } =
		useContext(ModalContext);
	const handleClick = () => {
		// console.log('clicked');
	};

	return (
		<div>
			<div className="latest__item" key={index}>
				<div className="latest__item__img">
					<img src={nft.image} alt={nft.name} />
				</div>

				<div className="latest__item__info">
					<h3>{nft.name}</h3>
					<p className="">{nft.description}</p>

					<div className="latest__item__info__footer">
						<div className="latest__item__info__footer__left">
							<p className="price">
								<FaEthereum /> {nft.price}
							</p>
							<p className='collection'>{nft.collection}</p>
						</div>
					</div>

					{bid && (
						<div
							className="latest__item__info__button"
							onClick={() => handleShowModal(nft)}
						>
							<p className="button">
								<IoMdRocket style={{ marginRight: '1rem' }} /> Place Bid
							</p>
						</div>
					)}

					{!bid && (
						<div
							className="latest__item__info__button"
							onClick={() => handleShowModal(nft)}
						>
							<p className="button">
								<BsFillBagPlusFill style={{ marginRight: '1rem' }} /> Buy Now
							</p>
							{/* <a href="/" className='button'> </a> */}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NftCard;
