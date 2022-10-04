import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import './setup.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { setupItems } from '../../data/setup';

const Setup = () => {
	return (
		<section className="padding">
			<h1 className="heading">How It Works</h1>
			<p className="subheading">Get Started</p>

			{/* <div className="setup__items">
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					// navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					breakpoints={{
						640: {
							width: 640,
							slidesPerView: 1,
						},
						// when window width is >= 768px
						768: {
							width: 768,
							slidesPerView: 2,
						},
					}}
				>
					{setupItems.map((item, index) => (
						<SwiperSlide className="setup__item" key={index}>
							<div className="setup__item__icon">{item.icon}</div>
							<div className="setup__item__content">
								<h3 className="setup__item__title">{item.title}</h3>
								<p className="setup__item__text">{item.text}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div> */}

      <div className="setup__items">
					{setupItems.map((item, index) => (
						<div className="setup__item" key={index}>
							<div className="setup__item__icon">{item.icon}</div>
							<div className="setup__item__content">
								<h3 className="setup__item__title">{item.title}</h3>
								<p className="setup__item__text">{item.text}</p>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Setup;
