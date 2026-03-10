import Image from 'next/image'
import styles from './style.module.scss'

export const ServiceHero = ({ title }: { title: string; image?: string }) => {
	return (
		<section className={styles.hero}>
			<div className={`container ${styles.hero__container}`}>
				<Image
					src={'/images/service_hero.jpg'}
					fill
					alt="Service hero background image"
				/>
				<h1 className={styles['hero__container--title']}>{title}</h1>
			</div>
		</section>
	)
}
