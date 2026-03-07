'use client'

import { useGetFaqs } from '@/hooks/api.query'
import { Minus, Plus } from 'lucide-react'
import styles from './style.module.scss'

export const Faqs = () => {
	const { data } = useGetFaqs()
	console.log(data)

	return (
		<div>
			{[...Array(5)].map((_, index) => (
				<div
					key={index}
					className={styles.accordion}
				>
					<details
						open
						className={styles.accordion__details}
						name="faq"
					>
						<summary className={styles.accordion__summary}>
							<span
								className={styles.accordion__title}
								role="term"
								aria-details="faq-1"
							>
								How can I book a service?
							</span>
							<div>
								<span className={styles.open_icon}>
									<Plus size={32} />
								</span>
								<span className={styles.close_icon}>
									<Minus size={32} />
								</span>
							</div>
						</summary>
					</details>

					<div
						className={styles.accordion__content}
						id="faq-1"
						role="definition"
					>
						<div className={styles['accordion__content-body']}>
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
