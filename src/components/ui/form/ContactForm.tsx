import { useTranslations } from 'next-intl'
import styles from './style.module.scss'

export const ContactForm = () => {
	const t = useTranslations('contact')

	return (
		<form className={styles.form}>
			<label
				htmlFor="name"
				className={styles.label}
			>
				<span>{t('name_label')}</span>
				<input
					type="text"
					name="name"
					placeholder={t('name_placeholder')}
					required
				/>
			</label>
			<label
				htmlFor="email"
				className={styles.label}
			>
				<span>{t('email_label')}</span>
				<input
					type="email"
					name="email"
					placeholder={t('email_placeholder')}
					required
				/>
			</label>
			<label
				htmlFor="service"
				className={`${styles.label} md:col-span-2`}
			>
				<span>{t('service_label')}</span>
				<select
					name="service"
					required
				>
					<option
						value=""
						selected
						disabled
					>
						{t('service_placeholder')}
					</option>
				</select>
			</label>
			<label
				htmlFor="note"
				className={`${styles.label} md:col-span-2`}
			>
				<span>{t('note_label')}</span>
				<textarea
					name="note"
					placeholder={t('note_placeholder')}
					required
				></textarea>
			</label>
			<button className={`${styles.send_button} md:col-span-2`}>
				{t('send')}
			</button>
		</form>
	)
}
