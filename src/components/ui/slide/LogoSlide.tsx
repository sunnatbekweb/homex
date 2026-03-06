'use client'

import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './style.scss'

export const LogoSlide = () => {
	return (
		<Swiper
			slidesPerView={5}
			spaceBetween={15}
			loop
			centeredSlides
			className="mySwiper"
		>
			{[...Array(8)].map((_, index) => (
				<SwiperSlide
					className="relative"
					key={index}
				>
					<Image
						src={'/images/logo_ipsum.png'}
						width={170}
						height={30}
						alt="Logo"
						className="rounded-[10px]"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
