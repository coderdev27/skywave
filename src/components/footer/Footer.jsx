import React from 'react';
import './footer.scss';
import Logo from '../../assets/skyWaveLogo.png';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
	return (
		<div className="">
			<div className="padding footer">
				<div className="footer__content">
					<div className="footer__content__left">
						<img src={Logo} alt="logo" />
						<p className="footer__content__left__subheading">
            Skywave is a decentralized marketplace for NFTs.
Where you can Buy and sell NFTs from the world’s top artists
						</p>
						<div className="footer__content__social">
							<i className="fab fa-facebook-f">
								<FaFacebook />
							</i>
							<i className="fab fa-twitter">
								<FaTwitter />{' '}
							</i>
							<i className="fab fa-instagram">
								<FaInstagram />
							</i>
						</div>
					</div>

					<div className="footer__content__right">
						<h1 className="footer__content__right__heading heading">
							Quick Links
						</h1>
						<ul className="footer__content__links">
							<li className="list__item">
								<a href="#">Home</a>
							</li>
							<li className="list__item">
								<a href="#">Live Auction</a>
							</li>
							<li className="list__item">
								<a href="#">Authors</a>
							</li>
						</ul>
					</div>
					{/* newsletter */}
					<div className="footer__content__newsletter">
						<h1 className="footer__content__newsletter__heading heading">
							Newsletter
						</h1>
						<p className="footer__content__newsletter__subheading">
							Subscribe to our newsletter and get notification about new
							updates, information, discount, etc.
						</p>
						<div className="footer__content__newsletter__input">
							<input
								type="text"
								placeholder="Enter your email"
								className="footer__content__newsletter__input__field"
							/>
							<button className="footer__content__newsletter__input__btn">
								<i className="fas fa-paper-plane">
									<FiSend />
								</i>
							</button>
						</div>
						{/* social icons */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
