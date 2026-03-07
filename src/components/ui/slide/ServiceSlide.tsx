'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'

import { useGetServices } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import './style.scss'

export const ServiceSlide = () => {
	const { data } = useGetServices()
	const locale = useLocale() as TLocale
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
				{data?.map((service, index) => (
					<SwiperSlide
						className="relative rounded-[10px] overflow-hidden"
						key={index}
					>
						<Image
							src={service?.image}
							width={300}
							height={230}
							alt={service?.[`title_${locale}`]}
							className="w-full"
						/>
						<div className="absolute left-5 bottom-5 px-2.5 py-1.25 rounded-md bg-primary text-sm leading-none text-white line-clamp-1 w-[calc(100%-40px)]">
							{service?.[`title_${locale}`]}
						</div>
						<div className="bg-black/20 w-full h-full absolute top-0 left-0"></div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
