'use client'

import { useGetStatistics } from '@/hooks/api.query'
import { useTranslations } from 'next-intl'

export const Statistics = () => {
	const { data } = useGetStatistics()
	const t = useTranslations('statistics')

	return (
		<div className="flex flex-col md:flex-row gap-y-7.5 items-center justify-between mt-7.5">
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-primary text-center md:text-start">
					{data?.repairs_completed}
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					{t('repairs')}
				</span>
			</div>
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-primary text-center md:text-start">
					{data?.verified_professionals}
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					{t('professionals')}
				</span>
			</div>
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-primary text-center md:text-start">
					{data?.customer_support}
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					{t('support')}
				</span>
			</div>
			<div className="flex flex-col">
				<strong className="font-semibold text-[4rem] text-primary text-center md:text-start">
					{data?.customer_satisfaction}
				</strong>
				<span className="font-medium text-lg leading-none text-center md:text-start">
					{t('satisfaction')}
				</span>
			</div>
		</div>
	)
}
