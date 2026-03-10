'use client'

import { ServiceSlide } from '@/components/ui/slide/ServiceSlide'
import { useGetServices } from '@/hooks/api.query'

export const Detail = () => {
	const { data } = useGetServices()
	return (
		<section>
			<div className="container">
				<div className="py-20">
					<p className="md:text-lg leading-tight">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&apos;s standard dummy
						text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived
						not only five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged. It was popularised in
						the 1960s with the release of Letraset sheets containing Lorem Ipsum
						passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<ServiceSlide data={data || []} />
			</div>
		</section>
	)
}
