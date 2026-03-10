'use client'

import { useGetServices, usePostContact } from '@/hooks/api.query'
import { IContact, TLocale } from '@/types'
import { X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { toast } from 'react-toastify'
import styles from './style.module.scss'

export const Form = () => {
	const t = useTranslations('contact')
	const { register, handleSubmit, control, reset } = useForm<IContact>()
	const { mutate, isPending } = usePostContact()
	const [images, setImages] = useState<File[]>([])
	const { data: services } = useGetServices()
	const locale = useLocale() as TLocale

	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files) return

		const selected = Array.from(files).slice(0, 3 - images.length)

		setImages(prev => [...prev, ...selected])
	}

	const removeImage = (index: number) => {
		setImages(prev => prev.filter((_, i) => i !== index))
	}

	const handleFormSubmit: SubmitHandler<IContact> = data => {
		if (images.length === 0) {
			toast.error('Upload at least one image', { autoClose: 2000 })
			return
		}

		const formData = new FormData()

		formData.append('name', data.name)
		formData.append('phone', data.phone)
		formData.append('service', String(data.service))
		formData.append('extra_notes', data.extra_notes)

		images.forEach(file => {
			formData.append('images', file)
		})

		mutate(formData as FormData, {
			onSuccess: () => {
				toast.success('Successfully send!', { autoClose: 3000 })
				setImages([])
				reset()
			},
			onError: () => {
				toast.error('Error sending data!', { autoClose: 3000 })
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
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
			<Controller
				name="phone"
				control={control}
				rules={{
					required: true,
					pattern: {
						value: /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
						message: 'Enter valid phone number'
					}
				}}
				render={({ field }) => (
					<label className={styles.label}>
						<span>{t("email_label")}</span>
						<IMaskInput
							{...field}
							mask="+998 (00) 000-00-00"
							placeholder="+998 (__) ___-__-__"
							type="tel"
							onAccept={value => field.onChange(value)}
						/>
					</label>
				)}
			/>
			<label
				htmlFor="service"
				className={`${styles.label} lg:col-span-2`}
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
					{services?.map(service => (
						<option
							key={service.id}
							value={service.id}
						>
							{service?.[`title_${locale}`]}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="service"
				className={`${styles.label} lg:col-span-2`}
			>
				<span>{t('file')}</span>
				<div className="relative group">
					<Image
						src={'/icons/upload.svg'}
						width={24}
						height={24}
						alt="Upload"
						className="absolute left-4 top-1/2 -translate-y-1/2"
					/>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={handleUpload}
						className="w-full"
					/>
					<div className="w-[calc(100%-56px)] bg-[#272727] group-hover:text-primary text-[#B1B1B1] absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none">
						{t("file_placeholder")}
					</div>
				</div>
				<div className="flex gap-3">
					{images.map((file, index) => (
						<div
							key={index}
							className={styles.uploaeded}
						>
							<button
								type="button"
								onClick={() => removeImage(index)}
							>
								<X size={16} />
							</button>
							<div className="w-full h-full absolute top-0 left-0 bg-black/20"></div>
							<Image
								src={URL.createObjectURL(file)}
								width={72}
								height={72}
								alt="Uploaded image"
								className="rounded-md object-contain w-18 aspect-square"
							/>
						</div>
					))}
				</div>
			</label>
			<label
				htmlFor="note"
				className={`${styles.label} lg:col-span-2`}
			>
				<span>{t('note_label')}</span>
				<textarea
					{...register('extra_notes', { required: true })}
					placeholder={t('note_placeholder')}
				></textarea>
			</label>
			<button className={`${styles.send_button} lg:col-span-2`}>
				{isPending ? '...' : t('send')}
			</button>
		</form>
	)
}
