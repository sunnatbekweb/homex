'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'

import './style.scss'

export const ServiceSlide = () => {
	return (
		<div className="relative">
			<Swiper
				slidesPerView={1.75}
				spaceBetween={15}
				loop
				breakpoints={{
					640: {
						slidesPerView: 2.5
					},
					1024: {
						slidesPerView: 4.5
					}
				}}
				className="service_slide"
			>
				{[...Array(6)].map((_, index) => (
					<SwiperSlide
						className="relative"
						key={index}
					>
						<Image
							src={'/images/service_image.jpg'}
							width={300}
							height={230}
							alt="Service image"
							className="rounded-[10px] w-full"
						/>
						<div className="bg-black/20 w-full h-full absolute top-0 left-0"></div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
