import { Facebook } from '@/assets/icons/Facebook'
import { Instagram } from '@/assets/icons/Instagram'
import { Mail } from '@/assets/icons/Mail'
import { Telegram } from '@/assets/icons/Telegram'
import { Youtube } from '@/assets/icons/Youtube'
import { useTranslations } from 'next-intl'

export const ContactInfo = () => {
	const t = useTranslations('contact')
	return (
		<div>
			<h2 className="max-w-155 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center md:text-start mb-12.5">
				{t('title')}
			</h2>
			<div className="grid max-w-3/4 sm:max-w-full mx-auto sm:grid-cols-2 text-center sm:text-start gap-y-10">
				<div>
					<b className="leading-none">{t('call')}</b>
					<br />
					<br />
					<a
						href="tel:+998(87)105-16-16"
						className="text-[#B1B1B1]"
					>
						+998 87 105 16 16
					</a>
					<br />
					<a
						href="tel:+998(87)108-16-16"
						className="text-[#B1B1B1]"
					>
						+998 87 108 16 16
					</a>
				</div>
				<div>
					<b className="leading-none">{t('location')}</b>
					<br />
					<br />
					<a
						href="tel:"
						className="text-[#B1B1B1]"
					>
						{t('address')}
					</a>
				</div>
				<div>
					<b className="leading-none">Telegram</b>
					<br />
					<br />
					<a
						href="https://t.me/homexs_admin"
						target='_blank'
						className="text-[#B1B1B1]"
					>
						@homexs_admin
					</a>
				</div>
				<div>
					<b className="leading-none">{t('social')}</b>
					<br />
					<br />
					<div className="flex items-center justify-center sm:justify-start gap-6.25">
						<a
							href="https://t.me/"
							className="text-[#B1B1B1] group"
						>
							<Telegram />
						</a>
						<a
							href="https://instagram.com"
							className="text-[#B1B1B1] group"
						>
							<Instagram />
						</a>
						<a
							href="https://mail.google.com"
							className="text-[#B1B1B1] group"
						>
							<Mail />
						</a>
						<a
							href="https://youtube.com"
							className="text-[#B1B1B1] group"
						>
							<Youtube />
						</a>
						<a
							href="https://facebook.com"
							className="text-[#B1B1B1] group"
						>
							<Facebook />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
