import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './style.module.scss'

export const Footer = () => {
	const t = useTranslations()
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<ul className={styles.list}>
					<li>
						<Link href={'#top'}>{t('nav.home')}</Link>
					</li>
					<li>
						<Link href={'#services'}>{t('nav.services')}</Link>
					</li>
					<li>
						<Link href={'#guarantee'}>{t('nav.guarantee')}</Link>
					</li>
					<li>
						<Link href={'#reviews'}>{t('nav.reviews')}</Link>
					</li>
					<li>
						<Link href={'#contact'}>{t('nav.contact')}</Link>
					</li>
				</ul>
				<div className={styles.bottom}>
					<span>{new Date().getFullYear()} Copyright</span>
					<span>&copy; Homex.</span> <span>{t('footer_text')}</span>
				</div>
			</div>
		</footer>
	)
}
