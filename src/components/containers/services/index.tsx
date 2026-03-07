'use client'

import { ServiceSlide } from '@/components/ui/slide/ServiceSlide'
import { useGetServices } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react/jsx-runtime'

export const Services = () => {
	const { data } = useGetServices()
	const locale = useLocale() as TLocale
	return (
		<>
			<div className="flex flex-wrap gap-3.75 justify-center mb-7.5">
				{data?.map((service, index) => {
					return (
						<Fragment key={index}>
							<div className="w-full md:max-w-57.5 lg:max-w-75 xl:max-w-97.5 card">
								<div className="w-9.5 h-9.5 rounded-md bg-primary flex items-center justify-center">
									<Image
										src={service?.icon}
										width={24}
										height={24}
										alt="Service icon"
									/>
								</div>
								<div className="mt-3 flex flex-col gap-y-2.5">
									<strong className="font-semibold">
										{service?.[`title_${locale}`]}
									</strong>
									<ul className="list-disc ps-5">
										{service.features.map(item => (
											<li
												key={item.id}
												className="leading-tight"
											>
												{item?.[`title_${locale}`]}
											</li>
										))}
									</ul>
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
