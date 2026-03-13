import { Contact } from '@/components/containers/contact'
import { Faqs } from '@/components/containers/faqs'
import { Hero } from '@/components/containers/hero/HomeHero'
import { Services } from '@/components/containers/services/Main'
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
					<div className="py-15 md:py-25 flex flex-col lg:flex-row gap-x-7.5 gap-y-10">
						<div className="lg:w-[50%] sticky top-25 self-start">
							<div className="lg:max-w-116">
								<h2 className="font-medium text-2xl md:text-[2.625rem] leading-none mb-7.5 text-center lg:text-start">
									{t('reviews.title')}
								</h2>
								<p className="leading-normal text-center lg:text-start">
									{t('reviews.text')}
								</p>
							</div>
						</div>

						<div className="lg:w-[50%]">
							<Testimonials />
						</div>
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
			<Contact id="contact" />
		</main>
	)
}
