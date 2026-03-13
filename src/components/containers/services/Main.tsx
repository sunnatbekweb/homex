'use client'

import { ServiceSlide } from '@/components/ui/slide/ServiceSlide'
import { Link } from '@/config/i18n/routing'
import { useGetServices } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export const Services = () => {
	const { data } = useGetServices()
	const locale = useLocale() as TLocale
	return (
		<>
			<div className="flex flex-wrap gap-3.75 justify-center mb-7.5">
				{data?.map((service, index) => {
					return (
						<Link
							href={`/service/${service?.[`title_${locale}`].toLowerCase().replace(/\s+/g, '-')}/${service.id}`}
							key={index}
							className="block w-full md:w-auto"
						>
							<div className="w-full h-full md:max-w-57.5 lg:max-w-75 xl:max-w-97.5 card">
								<div className="flex items-center gap-x-2.5">
									{service?.icons?.map(item => (
										<div
											key={item?.id}
											className="w-9.5 h-9.5 rounded-md bg-primary flex items-center justify-center"
										>
											<Image
												src={item?.icon}
												width={30}
												height={30}
												alt="Service icon"
												loading="lazy"
											/>
										</div>
									))}
								</div>
								<div className="mt-3 flex flex-col gap-y-2.5">
									<strong className="font-semibold leading-tight">
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
						</Link>
					)
				})}
			</div>
			<ServiceSlide data={data || []} />
		</>
	)
}
