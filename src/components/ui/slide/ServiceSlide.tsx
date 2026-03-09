'use client'

import { useGetServices } from '@/hooks/api.query'
import useFancybox from '@/hooks/useFancybox'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import { Autoplay } from 'swiper/modules'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'

import './style.scss'

export const ServiceSlide = () => {
	const { data } = useGetServices()
	const locale = useLocale() as TLocale
	const [fancyboxRef] = useFancybox()

	return (
		<div ref={fancyboxRef}>
			<Swiper
				slidesPerView={1}
				spaceBetween={15}
				loop={data ? data?.length > 5 : true}
				speed={1000}
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
					delay: 1000
				}}
				modules={[Autoplay]}
				className="service_slide"
			>
				{data?.map((service, index) => (
					<SwiperSlide
						className="relative rounded-[10px] overflow-hidden"
						key={index}
					>
						<div
							data-fancybox="service_images"
							data-src={service?.image}
						>
							<Image
								src={service?.image}
								width={300}
								height={260}
								alt={service?.[`title_${locale}`]}
								className="w-full aspect-square object-cover"
							/>
							<strong
								title={service?.[`title_${locale}`]}
								className="absolute left-5 bottom-5 px-2.5 py-1.25 rounded-md bg-primary text-sm leading-none text-white w-fit"
							>
								{service?.[`title_${locale}`]}
							</strong>
							<div className="bg-black/20 w-full h-full absolute top-0 left-0 pointer-events-none"></div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
