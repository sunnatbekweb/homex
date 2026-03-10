import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'
import { QueryProvider } from '@/providers/queryClientProvider'
import { TLocale } from '@/types'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Exo_2 } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'

const exo_2 = Exo_2({
	variable: '--font-exo_2',
	subsets: ['latin', 'cyrillic']
})

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: TLocale }>
}): Promise<Metadata> {
	const { locale } = await params

	const description =
		'HomeX — uy va ofislar uchun texnik servis xizmati. Uy xizmatlari uchun ishonchli mutaxassislarni bir necha daqiqada chaqiring. Kichik ta’mirlash yoki katta muammo bo‘lishidan qat’i nazar, mutaxassislarimiz sizning ehtiyojlaringizga mos ravishda ishonchli, arzon va o‘z vaqtida yechimlar taqdim etadi.'

	return {
		title: 'Homex — Uy va ofislar uchun texnik xizmatlar',
		description,

		keywords:
			'Homex, homex, Homexs, homexs, Electrical services, Boiler services, Air Conditioner Services, Appliance Repair, Plumbing services, Elektr xizmatlari, Katyol (qozon) xizmati, Konditsioner xizmati, Maishiy texnika ta’miri, Santexnika ishlari',

		authors: [{ name: 'Infonex.uz' }],

		robots: {
			index: true,
			follow: true
		},

		alternates: {
			canonical: `https://homexs.com/${locale}`,
			languages: {
				uz: 'https://homexs.com/uz',
				ru: 'https://homexs.com/ru',
				en: 'https://homexs.com/en'
			}
		},

		openGraph: {
			title: 'Homex',
			description,
			url: `https://homexs.com/${locale}`,
			siteName: 'Homex',
			type: 'website',
			images: [
				{
					url: '/icons/logo_text.svg',
					width: 1200,
					height: 630,
					alt: 'HomeX — uy va ofislar uchun texnik servis xizmati'
				}
			]
		},

		twitter: {
			card: 'summary_large_image',
			title: 'Homex',
			description,
			images: ['/icons/logo_text.svg']
		}
	}
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: TLocale }>
}>) {
	const messages = await getMessages()
	const { locale } = await params

	return (
		<html lang={locale}>
			<body className={`${exo_2.variable} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<QueryProvider>
						<Header />
						{children}
						<Footer />
						<ToastContainer theme="colored" />
					</QueryProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
