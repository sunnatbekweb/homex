'use client'

import { Link } from '@/config/i18n/routing'
import { useIntersection } from '@/hooks/useIntersection'
import { useTranslations } from 'next-intl'
import styles from './style.module.scss'

export const Nav = () => {
	const t = useTranslations('nav')
	const { activeSection } = useIntersection()

	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				<li className={styles['nav__list--item']}>
					<Link
						href="/"
						onClick={() => window.scrollTo(0, 0)}
						className={`${styles['nav__list--item-link']} ${
							activeSection === 'home' ? styles.active : ''
						}`}
					>
						{t('home')}
					</Link>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#services'}
						className={`${styles['nav__list--item-link']} ${activeSection === 'services' ? styles.active : ''}`}
					>
						{t('services')}
					</a>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#reviews'}
						className={`${styles['nav__list--item-link']} ${activeSection === 'reviews' ? styles.active : ''}`}
					>
						{t('reviews')}
					</a>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#faq'}
						className={`${styles['nav__list--item-link']} ${activeSection === 'faq' ? styles.active : ''}`}
					>
						{t('guarantee')}
					</a>
				</li>
				<li className={styles['nav__list--item']}>
					<a
						href={'#contact'}
						className={`${styles['nav__list--item-link']} ${activeSection === 'contact' ? styles.active : ''}`}
					>
						{t('contact')}
					</a>
				</li>
			</ul>
		</nav>
	)
}
