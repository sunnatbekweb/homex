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
					<Link
						href={{ pathname: '/', hash: 'services' }}
						className={`${styles['nav__list--item-link']} ${activeSection === 'services' ? styles.active : ''}`}
					>
						{t('services')}
					</Link>
				</li>
				<li className={styles['nav__list--item']}>
					<Link
						href={{ pathname: '/', hash: 'reviews' }}
						className={`${styles['nav__list--item-link']} ${activeSection === 'reviews' ? styles.active : ''}`}
					>
						{t('reviews')}
					</Link>
				</li>
				<li className={styles['nav__list--item']}>
					<Link
						href={{ pathname: '/', hash: 'faq' }}
						className={`${styles['nav__list--item-link']} ${activeSection === 'faq' ? styles.active : ''}`}
					>
						{t('guarantee')}
					</Link>
				</li>
				<li className={styles['nav__list--item']}>
					<Link
						href={{ pathname: '/', hash: 'contact' }}
						className={`${styles['nav__list--item-link']} ${activeSection === 'contact' ? styles.active : ''}`}
					>
						{t('contact')}
					</Link>
				</li>
			</ul>
		</nav>
	)
}
