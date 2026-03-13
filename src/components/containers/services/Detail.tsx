'use client'

import { ServiceDetailSlide } from '@/components/ui/slide/ServiceDetailSlide'
import { useGetServiceById } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'

interface Params {
	id: string
}

export const Detail = ({ id }: Params) => {
	const { data } = useGetServiceById(id)
	const locale = useLocale() as TLocale

	return (
		<section>
			<div className="container">
				<div className="py-20">
					<div
						className="service_content"
						dangerouslySetInnerHTML={{
							__html: data?.[`content_${locale}`] || ''
						}}
					/>
				</div>
				<ServiceDetailSlide
					data={data?.images || []}
					title={data?.[`content_${locale}`] || ''}
				/>
			</div>
		</section>
	)
}
