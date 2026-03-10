'use client'

import { useGetTestimonials } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export const Testimonials = () => {
	const { data } = useGetTestimonials()
	const locale = useLocale() as TLocale
	return (
		<div className="relative grid sm:grid-cols-2 gap-3.75">
			{data?.map((item, index) => (
				<div
					key={index}
					className="feedback_card"
				>
					<div className="flex items-center gap-2.5">
						<Image
							src={item.avatar}
							width={50}
							height={50}
							alt={item.customer_name}
							className="rounded-full w-12.5 aspect-square"
						/>
						<div className="flex flex-col">
							<strong>{item.customer_name}</strong>
							<span className="text-sm text-[#B1B1B1]">
								{item?.[`title_${locale}`]}
							</span>
						</div>
					</div>
					<div className="mt-3 flex flex-col gap-y-2.5">
						<p className="text-sm leading-none">
							{item?.[`comment_${locale}`]}
						</p>
					</div>
				</div>
			))}
			<div className="feedback_gradient hidden lg:block"></div>
		</div>
	)
}
