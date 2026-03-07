import { ContactInfo } from '@/components/containers/contact-form/ContactInfo'
import { Form } from '@/components/containers/contact-form/Form'
import { Faqs } from '@/components/containers/faqs'
import { Hero } from '@/components/containers/hero'
import { Services } from '@/components/containers/services'
import { Statistics } from '@/components/containers/statistics'
import { Testimonials } from '@/components/containers/testimonials'
import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations()
	return (
		<main>
			<Hero />
			{/* <section>
				<div className="container h-full">
					<div className="pt-15 pb-15 md:pb-25">
						<p className="font-medium text-lg text-center mb-5">
							{t('logos_title')}
						</p>
						<div className="relative h-16 flex items-center justify-between">
							<LogoSlide />
						</div>
					</div>
				</div>
			</section> */}
			<section id="services">
				<div className="container">
					<div className="pt-7.5 pb-15 md:pt-15 md:pb-25">
						<h2 className="max-w-155 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center mb-7.5">
							{t('services_title')}
						</h2>
						<Services />
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="py-15 md:py-25">
						<div className="max-w-2xl mx-auto">
							<h2 className="max-w-155 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center mb-7.5">
								{t('statistics.title')}
							</h2>
							<p className="leading-normal text-center">
								{t('statistics.subtitle')}
							</p>
						</div>
						<Statistics />
					</div>
				</div>
			</section>
			<section id="reviews">
				<div className="container">
					<div className="py-15 md:py-25 grid grid-cols-1 gap-x-7.5 lg:grid-cols-2 gap-y-10">
						<div>
							<div className="lg:max-w-116">
								<h2 className="font-medium text-2xl md:text-[2.625rem] leading-none mb-7.5 text-center lg:text-start">
									{t('reviews.title')}
								</h2>
								<p className="leading-normal text-center lg:text-start">
									{t('reviews.text')}
								</p>
							</div>
						</div>
						<Testimonials />
					</div>
				</div>
			</section>
			<section id="faq">
				<div className="container">
					<div className="py-15 md:py-25">
						<h2 className="font-medium text-2xl md:text-[2.625rem] leading-none mb-12.5 text-center">
							FAQ
						</h2>
						<Faqs />
					</div>
				</div>
			</section>
			<section
				id="contact"
				className="border-b border-[#505050]"
			>
				<div className="container">
					<div className="grid gap-y-12.5 gap-x-10 md:grid-cols-2 pt-15 md:pt-25 pb-25 md:pb-50">
						<ContactInfo />
						<Form />
					</div>
				</div>
			</section>
			<div className="py-5 md:py-10 bg-[#171717]"></div>
		</main>
	)
}
