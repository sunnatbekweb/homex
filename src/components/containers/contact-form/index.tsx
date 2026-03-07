'use client'

import { usePostContact } from '@/hooks/api.query'
import { IContact } from '@/types'
import { useTranslations } from 'next-intl'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './style.module.scss'

export const ContactForm = () => {
	const t = useTranslations('contact')
	const { register, handleSubmit } = useForm<IContact>()
	const { mutate, isPending } = usePostContact()

	const onSubmit: SubmitHandler<IContact> = data => mutate(data)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<label
				htmlFor="name"
				className={styles.label}
			>
				<span>{t('name_label')}</span>
				<input
					type="text"
					placeholder={t('name_placeholder')}
					{...register('name', { required: true })}
				/>
			</label>
			<label
				htmlFor="email"
				className={styles.label}
			>
				<span>{t('email_label')}</span>
				<input
					type="email"
					placeholder={t('email_placeholder')}
					{...register('email', { required: true })}
				/>
			</label>
			<label
				htmlFor="service"
				className={`${styles.label} md:col-span-2`}
			>
				<span>{t('service_label')}</span>
				<select
					{...register('service', { required: true })}
					defaultValue={''}
				>
					<option
						value=""
						disabled
					>
						{t('service_placeholder')}
					</option>
					<option value={1}>Value 1</option>
				</select>
			</label>
			<label
				htmlFor="note"
				className={`${styles.label} md:col-span-2`}
			>
				<span>{t('note_label')}</span>
				<textarea
					{...register('extra_notes', { required: true })}
					placeholder={t('note_placeholder')}
				></textarea>
			</label>
			<button className={`${styles.send_button} md:col-span-2`}>
				{isPending ? '...' : t('send')}
			</button>
		</form>
	)
}
