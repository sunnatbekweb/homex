'use client'

import { useGetFaqs } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { Minus, Plus } from 'lucide-react'
import { useLocale } from 'next-intl'
import styles from './style.module.scss'

export const Faqs = () => {
	const { data } = useGetFaqs()
	const locale = useLocale() as TLocale

	return (
		<div>
			{data?.map((item, index) => (
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
								{item?.[`question_${locale}`]}
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
							<p>{item?.[`answer_${locale}`]}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
