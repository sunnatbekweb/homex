'use client'

import { ServiceSlide } from '@/components/ui/slide/ServiceSlide'
import { useGetServices } from '@/hooks/api.query'
import Image from 'next/image'
import { Fragment } from 'react/jsx-runtime'

export const Services = () => {
	const { data } = useGetServices()
	console.log(data)

	const services = [...Array(5)]
	return (
		<>
			<div className="flex flex-wrap gap-3.75 justify-center mb-7.5">
				{services.map((_, index) => {
					return (
						<Fragment key={index}>
							<div className="md:max-w-57.5 lg:max-w-75 xl:max-w-97.5 card">
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
										Professional AC installation, removal, freon refill, and
										repairs to keep your space cool and comfortable.
									</p>
								</div>
							</div>
						</Fragment>
					)
				})}
			</div>
			<ServiceSlide />
		</>
	)
}
