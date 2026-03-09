'use client'

import { Link } from '@/config/i18n/routing'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

export const Nav = () => {
	const t = useTranslations('nav')
	const [hash, setHash] = useState('')

	useEffect(() => {
		const handleHashChange = () => {
			setHash(window.location.hash)
		}
		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)
		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				<li className={styles['nav__list--item']}>
					<Link
						href={'/'}
						onClick={() => window?.scrollTo(0, 0)}
						className={`${styles['nav__list--item-link']} ${hash === '#top' || hash === '' ? styles.active : ''}`}
					>
						{t('home')}
					</Link>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#services'}
						className={`${styles['nav__list--item-link']} ${hash === '#services' ? styles.active : ''}`}
					>
						{t('services')}
					</a>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#reviews'}
						className={`${styles['nav__list--item-link']} ${hash === '#reviews' ? styles.active : ''}`}
					>
						{t('reviews')}
					</a>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#faq'}
						className={`${styles['nav__list--item-link']} ${hash === '#faq' ? styles.active : ''}`}
					>
						{t('guarantee')}
					</a>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#contact'}
						className={`${styles['nav__list--item-link']} ${hash === '#contact' ? styles.active : ''}`}
					>
						{t('contact')}
					</a>
				</li>
			</ul>
		</nav>
	)
}
