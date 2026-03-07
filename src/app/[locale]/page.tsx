import { ContactForm } from '@/components/ui/form/ContactForm'
import { LogoSlide } from '@/components/ui/slide/LogoSlide'
import { ServiceSlide } from '@/components/ui/slide/ServiceSlide'
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
					<h2 className="font-semibold text-5xl md:text-[100px] leading-none text-center mb-7.5">
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
						<h2 className="max-w-120 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center mb-7.5">
							{t('services_title')}
						</h2>
						<div className="grid grid-cols-1 gap-3.75 md:grid-cols-6 mb-7.5">
							{[...Array(3)].map((_, index) => (
								<div
									key={index}
									className="card col-span-2"
								>
									<div className="w-9.5 h-9.5 rounded-md bg-[#FF5931] flex items-center justify-center">
										<Image
											src={'/images/service_icon.png'}
											width={24}
											height={24}
											alt="Service icon"
										/>
									</div>
									<div className="mt-3 flex flex-col gap-y-2.5">
										<strong className="font-semibold">
											Air Conditioner Services
										</strong>
										<p className="text-sm leading-none">
											Professional AC installation, removal, freon refill, and
											repairs to keep your space cool and comfortable.
										</p>
									</div>
								</div>
							))}
							<div className="hidden md:block"></div>
							{[...Array(2)].map((_, index) => (
								<div
									key={index}
									className="card col-span-2"
								>
									<div className="w-9.5 h-9.5 rounded-md bg-[#FF5931] flex items-center justify-center">
										<Image
											src={'/images/service_icon.png'}
											width={24}
											height={24}
											alt="Service icon"
										/>
									</div>
									<div className="mt-3 flex flex-col gap-y-2.5">
										<strong className="font-semibold">
											Air Conditioner Services
										</strong>
										<p className="text-sm leading-none">
											Professional AC installation, removal, freon refill, and
											repairs to keep your space cool and comfortable.
										</p>
									</div>
								</div>
							))}
						</div>
						<ServiceSlide />
					</div>
				</div>
			</section>
			<section id="guarantee">
				<div className="container">
					<div className="py-15 md:py-25">
						<div className="max-w-2xl mx-auto">
							<h2 className="max-w-120 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center mb-7.5">
								{t('statistics.title')}
							</h2>
							<p className="leading-normal text-center">
								{t('statistics.subtitle')}
							</p>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-between mt-7.5">
							<div className="flex flex-col">
								<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
									500+
								</strong>
								<span className="font-medium text-lg leading-none text-center md:text-start">
									Repairs Completed
								</span>
							</div>
							<div className="flex flex-col">
								<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
									50+
								</strong>
								<span className="font-medium text-lg leading-none text-center md:text-start">
									Verified Professionals
								</span>
							</div>
							<div className="flex flex-col">
								<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
									24/7
								</strong>
								<span className="font-medium text-lg leading-none text-center md:text-start">
									Customer Support
								</span>
							</div>
							<div className="flex flex-col">
								<strong className="font-semibold text-[4rem] text-[#FF5931] text-center md:text-start">
									98%
								</strong>
								<span className="font-medium text-lg leading-none text-center md:text-start">
									Customer Satisfaction
								</span>
							</div>
						</div>
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
						<div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.75">
							{[...Array(2)].map((_, index) => (
								<div
									key={index}
									className="flex flex-col gap-y-3.75"
								>
									{[...Array(4)].map((_, index) => (
										<div
											key={index}
											className="feedback_card col-span-2"
										>
											<div className="flex items-center gap-2.5">
												<Image
													src={'/images/feedback_avatar.jpg'}
													width={50}
													height={50}
													alt="Service icon"
													className="rounded-full w-12.5 aspect-square"
												/>
												<div className="flex flex-col">
													<strong>Nargiza</strong>
													<span className="text-sm text-[#B1B1B1]">
														Plumbing Service
													</span>
												</div>
											</div>
											<div className="mt-3 flex flex-col gap-y-2.5">
												<strong className="font-semibold">
													Air Conditioner Services
												</strong>
												<p className="text-sm leading-none">
													Professional AC installation, removal, freon refill,
													and repairs to keep your space cool and comfortable.
												</p>
											</div>
										</div>
									))}
								</div>
							))}
							<div className="feedback_gradient"></div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="py-15 md:py-25">
						<h2 className="font-medium text-2xl md:text-[2.625rem] leading-none mb-12.5 text-center">
							FAQ
						</h2>
						<div>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className="accordion"
								>
									<details
										open
										className="accordion__details"
										name="faq"
									>
										<summary className="accordion__summary">
											<span
												className="accordion__title"
												role="term"
												aria-details="faq-1"
											>
												How can I book a service?
											</span>
										</summary>
									</details>

									<div
										className="accordion__content"
										id="faq-1"
										role="definition"
									>
										<div className="accordion__content-body">
											<p>
												You can easily book a service through our website by
												selecting the service you need and filling out the
												booking form. Our team will contact you shortly to
												confirm the appointment.
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section
				id="contact"
				className="border-b border-[#505050]"
			>
				<div className="container">
					<div className="pt-15 md:pt-25 pb-25 md:pb-50">
						<h2 className="max-w-120 mx-auto font-medium text-2xl md:text-[2.625rem] leading-none text-center mb-12.5">
							{t('contact.title')}
						</h2>
						<ContactForm />
					</div>
				</div>
			</section>
			<div className="py-5 md:py-10 bg-[#171717]"></div>
		</main>
	)
}
