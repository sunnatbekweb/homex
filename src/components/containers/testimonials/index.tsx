'use client'

import { useGetTestimonials } from '@/hooks/api.query'
import Image from 'next/image'

export const Testimonials = () => {
	const { data } = useGetTestimonials()
	console.log(data)

	return (
		<div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.75">
			{[...Array(2)].map((_, index) => (
				<div
					key={index}
					className="flex flex-col gap-y-3.75"
				>
					{[...Array(4)].map((_, index) => (
						<div
							key={index}
							className="feedback_card col-span-2"
						>
							<div className="flex items-center gap-2.5">
								<Image
									src={'/images/feedback_avatar.jpg'}
									width={50}
									height={50}
									alt="Service icon"
									className="rounded-full w-12.5 aspect-square"
								/>
								<div className="flex flex-col">
									<strong>Nargiza</strong>
									<span className="text-sm text-[#B1B1B1]">
										Plumbing Service
									</span>
								</div>
							</div>
							<div className="mt-3 flex flex-col gap-y-2.5">
								<strong className="font-semibold">
									Air Conditioner Services
								</strong>
								<p className="text-sm leading-none">
									Professional AC installation, removal, freon refill, and
									repairs to keep your space cool and comfortable.
								</p>
							</div>
						</div>
					))}
				</div>
			))}
			<div className="feedback_gradient"></div>
		</div>
	)
}
