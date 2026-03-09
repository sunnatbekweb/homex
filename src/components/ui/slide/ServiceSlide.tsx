'use client'

import { useGetServices } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'

import { ServiceImageModal } from '../modal/ServiceImageModal'
import './style.scss'

export const ServiceSlide = () => {
	const { data } = useGetServices()
	const locale = useLocale() as TLocale
	const [activeImage, setActiveImage] = useState<string | null>(null)

	useEffect(() => {
		if (activeImage && document) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [activeImage])

	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={15}
				loop
				breakpoints={{
					375: {
						slidesPerView: 1.9
					},
					640: {
						slidesPerView: 2.5
					},
					1024: {
						slidesPerView: 4.5
					}
				}}
				autoplay={{
					delay: 2000
				}}
				modules={[Autoplay]}
				className="service_slide"
			>
				{data?.map((service, index) => (
					<SwiperSlide
						className="relative rounded-[10px] overflow-hidden"
						key={index}
					>
						<Image
							src={service?.image}
							width={300}
							height={260}
							alt={service?.[`title_${locale}`]}
							className="w-full aspect-square object-cover"
							onClick={() => setActiveImage(service.image)}
						/>
						<strong
							title={service?.[`title_${locale}`]}
							className="absolute left-5 bottom-5 px-2.5 py-1.25 rounded-md bg-primary text-sm leading-none text-white line-clamp-1 w-fit max-w-3/5"
						>
							{service?.[`title_${locale}`].length > 15
								? service?.[`title_${locale}`].slice(0, 15) + '...'
								: service?.[`title_${locale}`]}
						</strong>
						<div className="bg-black/20 w-full h-full absolute top-0 left-0 pointer-events-none"></div>
					</SwiperSlide>
				))}
			</Swiper>
			<ServiceImageModal
				image={activeImage || ''}
				isVisible={!!activeImage}
				close={() => setActiveImage(null)}
			/>
		</div>
	)
}
