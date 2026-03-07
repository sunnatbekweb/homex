import { Nav } from '@/components/ui/nav'
import { useTranslations } from 'next-intl'
import styles from './style.module.scss'

export const Footer = () => {
	const t = useTranslations()
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<div className="flex justify-center mb-7 sm:mb-3.75">
					<Nav />
				</div>
				<div className={styles.bottom}>
					<span>{new Date().getFullYear()} Copyright</span>
					<span>&copy; Homex.</span> <span>{t('footer_text')}</span>
				</div>
			</div>
		</footer>
	)
}
