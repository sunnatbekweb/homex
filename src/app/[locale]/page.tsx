import { ContactForm } from '@/components/containers/contact-form'
import { Faqs } from '@/components/containers/faqs'
import { Services } from '@/components/containers/services'
import { Statistics } from '@/components/containers/statistics'
import { Testimonials } from '@/components/containers/testimonials'
import { LogoSlide } from '@/components/ui/slide/LogoSlide'
import { MoveRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	const t = useTranslations()
	return (
		<main>
			<section className="hero h-screen">
				<div className="max-w-210 mx-auto mt-[15%]">
					<h2 className="font-semibold text-5xl md:text-[75px] leading-none text-center mb-7.5">
						{t('hero.title')}
					</h2>
					<p className="leading-normal text-center mx-[10%] mb-12.5">
						{t('hero.text')}
					</p>
					<div className="flex justify-center gap-5 mb-20.5 font-medium">
						<Link href={'#contact'}>
							<button className="h-13 flex items-center gap-2.5 px-6 rounded-4xl bg-[#8D8D8D99] text-sm md:text-xl text-white">
								{t('hero.button1')} <MoveRight />
							</button>
						</Link>
						<Link href={'#services'}>
							<button className="h-13 px-6 rounded-4xl bg-white text-sm md:text-xl text-black">
								{t('hero.button2')}
							</button>
						</Link>
					</div>
					<div className="flex justify-center gap-3.75">
						<div className="flex items-center">
							{[...Array(5)].map((_, index) => (
								<Image
									key={index}
									src={`/images/trusted_client${index}.jpg`}
									width={36}
									height={36}
									alt="Avatar"
									className="rounded-full w-7 aspect-square md:w9 -mr-1.5"
								/>
							))}
						</div>
						<p className="font-medium text-sm md:text-base">
							{t('hero.bottom_text')} 500+
						</p>
					</div>
				</div>
				<div className="bottom_gradient"></div>
			</section>
			<section>
				<div className="container h-full">
					<div className="pt-15 pb-15 md:pb-25">
						<p className="font-medium text-lg text-center mb-5">
							{t('logos_title')}
						</p>
						<div className="relative h-16 flex items-center justify-between">
							<LogoSlide />
							{/* <div className="gradient z-0"></div> */}
						</div>
					</div>
				</div>
			</section>
			<section id="services">
				<div className="container">
					<div className="py-15 md:py-25">
						<h2 className="max-w-155 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center mb-7.5">
							{t('services_title')}
						</h2>
						<Services />
					</div>
				</div>
			</section>
			<section id="guarantee">
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
					<div className="py-15 md:py-25 grid grid-cols-1 md:grid-cols-2 gap-y-10">
						<div>
							<div className="max-w-116">
								<h2 className="font-medium text-2xl md:text-[2.625rem] leading-none mb-7.5 text-center md:text-start">
									{t('reviews.title')}
								</h2>
								<p className="leading-normal text-center md:text-start">
									{t('reviews.text')}
								</p>
							</div>
						</div>
						<Testimonials />
					</div>
				</div>
			</section>
			<section>
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
						<div>
							<h2 className="max-w-155 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center md:text-start mb-12.5">
								{t('contact.title')}
							</h2>
							<div className="grid max-w-3/4 sm:max-w-full mx-auto sm:grid-cols-2 text-center sm:text-start gap-y-10">
								<div>
									<b className="leading-none">Call Center</b>
									<br />
									<br />
									<a
										href="tel:"
										className="text-[#B1B1B1]"
									>
										+998 99 900 00 00
									</a>
									<br />
									<a
										href="tel:"
										className="text-[#B1B1B1]"
									>
										+998 99 900 00 00
									</a>
								</div>
								<div>
									<b className="leading-none">Our Location</b>
									<br />
									<br />
									<a
										href="tel:"
										className="text-[#B1B1B1]"
									>
										18/35 Katta Khirmontepa, Uchtepa, Toshkent
									</a>
								</div>
								<div>
									<b className="leading-none">Telegram</b>
									<br />
									<br />
									<a
										href="https://t.me/@homex_admin"
										className="text-[#B1B1B1]"
									>
										@homex_admin
									</a>
								</div>
								<div>
									<b className="leading-none">Social Network</b>
									<br />
									<br />
									<div className="flex items-center justify-center gap-6.25">
										<a
											href="https://t.me/"
											className="text-[#B1B1B1]"
										>
											<Image
												src={'/icons/telegram.svg'}
												width={25}
												height={25}
												alt="Telegram"
											/>
										</a>
										<a
											href="https://facebook.com"
											className="text-[#B1B1B1]"
										>
											<Image
												src={'/icons/facebook.svg'}
												width={25}
												height={25}
												alt="Facebook"
											/>
										</a>
										<a
											href="https://instagram.com"
											className="text-[#B1B1B1]"
										>
											<Image
												src={'/icons/instagram.svg'}
												width={25}
												height={25}
												alt="Instagram"
											/>
										</a>
										<a
											href="https://youtube.com"
											className="text-[#B1B1B1]"
										>
											<Image
												src={'/icons/youtube.svg'}
												width={25}
												height={25}
												alt="YouTube"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</section>
			<div className="py-5 md:py-10 bg-[#171717]"></div>
		</main>
	)
}
