'use client'

import { useGetFaqs } from '@/hooks/api.query'

export const Faqs = () => {
	const { data } = useGetFaqs()
	console.log(data)

	return (
		<div>
			{[...Array(5)].map((_, index) => (
				<div
					key={index}
					className="accordion"
				>
					<details
						open
						className="accordion__details"
						name="faq"
					>
						<summary className="accordion__summary">
							<span
								className="accordion__title"
								role="term"
								aria-details="faq-1"
							>
								How can I book a service?
							</span>
						</summary>
					</details>

					<div
						className="accordion__content"
						id="faq-1"
						role="definition"
					>
						<div className="accordion__content-body">
							<p>
								You can easily book a service through our website by selecting
								the service you need and filling out the booking form. Our team
								will contact you shortly to confirm the appointment.
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
