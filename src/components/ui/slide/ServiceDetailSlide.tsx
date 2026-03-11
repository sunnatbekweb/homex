'use client'

import useFancybox from '@/hooks/useFancybox'
import { ISeriveImage } from '@/types'
import { Autoplay } from 'swiper/modules'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'

import './style.scss'

export const ServiceDetailSlide = ({
	data,
	title
}: {
	data: ISeriveImage[]
	title: string
}) => {
	const [fancyboxRef] = useFancybox()
	const images = data?.length > 2 ? [...data, ...data] : data

	return (
		<div ref={fancyboxRef}>
			<Swiper
				slidesPerView={1}
				spaceBetween={15}
				loop={images?.length > 4}
				speed={1000}
				breakpoints={{
					375: { slidesPerView: 1.9 },
					640: { slidesPerView: 2.5 },
					1024: { slidesPerView: 4.5 }
				}}
				autoplay={{ delay: 1000 }}
				modules={[Autoplay]}
				className="service_slide"
			>
				{[...Array(images?.length)].map((_, index) => (
					<SwiperSlide
						className="relative rounded-[10px] overflow-hidden"
						key={index}
					>
						<div
							data-fancybox="service_images"
							data-src={images?.[index]?.image}
						>
							{images?.[index] && (
								<Image
									src={images?.[index]?.image}
									width={300}
									height={260}
									alt={title}
									className="w-full aspect-square object-cover"
									loading="lazy"
								/>
							)}

							<div className="bg-black/20 w-full h-full absolute top-0 left-0 pointer-events-none"></div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
