'use client'

import { useGetServiceById } from '@/hooks/api.query'
import { TLocale } from '@/types'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import styles from './style.module.scss'

interface Params {
	image?: string
	id: string
}

export const ServiceHero = ({ id }: Params) => {
	const { data } = useGetServiceById(id)
	const locale = useLocale() as TLocale
	return (
		<section className={styles.hero}>
			<div className={`container ${styles.hero__container}`}>
				{data?.cover_image && (
					<Image
						src={data?.cover_image}
						fill
						alt="Service hero background image"
					/>
				)}
				<h1 className={styles['hero__container--title']}>
					{data?.[`title_${locale}`]}
				</h1>
			</div>
		</section>
	)
}
