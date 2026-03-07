'use client'

import { useGetStatistics } from '@/hooks/api.query'

export const Statistics = () => {
	const { data } = useGetStatistics()
	console.log(data)

	return (
		<div className="flex flex-col md:flex-row items-center justify-between mt-7.5">
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
					500+
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					Repairs Completed
				</span>
			</div>
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
					50+
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					Verified Professionals
				</span>
			</div>
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
					24/7
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					Customer Support
				</span>
			</div>
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
					98%
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					Customer Satisfaction
				</span>
			</div>
		</div>
	)
}
