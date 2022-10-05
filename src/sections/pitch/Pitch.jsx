import React from 'react';
import './pitch.scss';

const Pitch = () => {
	return (
		<div className="pitch padding">
			<h1 className="heading">Leading NFT Marketplace</h1>

			<div className="pitch__items">
				<div className="pitch__item">
					<h4>$10M+</h4>
					<p>Volume</p>
				</div>
				<div className="pitch__item">
					<h4>20,000</h4>
					<p>NFTs</p>
				</div>
				<div className="pitch__item">
					<h4>500</h4>
					<p>Creators</p>
				</div>
				<div className="pitch__item">
					<h4>10,000+</h4>
					<p>Users</p>
				</div>
			</div>
		</div>
	);
};

export default Pitch;
