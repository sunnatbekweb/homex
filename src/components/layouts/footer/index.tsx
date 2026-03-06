import Link from 'next/link'
import styles from './style.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<ul className={styles.list}>
					<li>
						<Link href={'#'}>Home</Link>
					</li>
					<li>
						<Link href={'#'}>Services</Link>
					</li>
					<li>
						<Link href={'#'}>Guarantee</Link>
					</li>
					<li>
						<Link href={'#'}>Reviews</Link>
					</li>
					<li>
						<Link href={'#'}>Contact</Link>
					</li>
				</ul>
				<div className={styles.bottom}>
					<span>{new Date().getFullYear()} Copyright</span>
					<span>&copy; Homex.</span> <span>All rights reserved.</span>
				</div>
			</div>
		</footer>
	)
}
