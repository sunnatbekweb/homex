'use client'

import { ServiceSlide } from '@/components/ui/slide/ServiceSlide'
import { useGetServices } from '@/hooks/api.query'
import Image from 'next/image'

export const Services = () => {
	const { data } = useGetServices()
	console.log(data)
	return (
		<>
			<div className="grid grid-cols-1 gap-3.75 md:grid-cols-6 mb-7.5">
				{[...Array(3)].map((_, index) => (
					<div
						key={index}
						className="card col-span-2"
					>
						<div className="w-9.5 h-9.5 rounded-md bg-[#FF5931] flex items-center justify-center">
							<Image
								src={'/images/service_icon.png'}
								width={24}
								height={24}
								alt="Service icon"
							/>
						</div>
						<div className="mt-3 flex flex-col gap-y-2.5">
							<strong className="font-semibold">
								Air Conditioner Services
							</strong>
							<p className="text-sm leading-none">
								Professional AC installation, removal, freon refill, and repairs
								to keep your space cool and comfortable.
							</p>
						</div>
					</div>
				))}
				<div className="hidden md:block"></div>
				{[...Array(2)].map((_, index) => (
					<div
						key={index}
						className="card col-span-2"
					>
						<div className="w-9.5 h-9.5 rounded-md bg-[#FF5931] flex items-center justify-center">
							<Image
								src={'/images/service_icon.png'}
								width={24}
								height={24}
								alt="Service icon"
							/>
						</div>
						<div className="mt-3 flex flex-col gap-y-2.5">
							<strong className="font-semibold">
								Air Conditioner Services
							</strong>
							<p className="text-sm leading-none">
								Professional AC installation, removal, freon refill, and repairs
								to keep your space cool and comfortable.
							</p>
						</div>
					</div>
				))}
			</div>
			<ServiceSlide />
		</>
	)
}
