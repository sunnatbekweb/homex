import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'
import { QueryProvider } from '@/providers/queryClientProvider'
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

export const metadata: Metadata = {
	title: 'Homex',
	description:
		'HomeX — uy va ofislar uchun texnik servis xizmati. Uy xizmatlari uchun ishonchli mutaxassislarni bir necha daqiqada chaqiring. Kichik ta’mirlash yoki katta muammo bo‘lishidan qat’i nazar, mutaxassislarimiz sizning ehtiyojlaringizga mos ravishda ishonchli, arzon va o‘z vaqtida yechimlar taqdim etadi.',
	keywords:
		'Homex, homex, Homexs, homexs, Electrical services, Boiler services, Air Conditioner Services, Appliance Repair, Plumbing services, Elektr xizmatlari, Katyol (qozon) xizmati, Konditsioner xizmati, Maishiy texnika ta’miri, Santexnika ishlari',
	authors: [{ name: 'Infonex.uz' }],
	robots: 'index, follow',
	openGraph: {
		title: 'Homex',
		description:
			'HomeX — uy va ofislar uchun texnik servis xizmati. Uy xizmatlari uchun ishonchli mutaxassislarni bir necha daqiqada chaqiring. Kichik ta’mirlash yoki katta muammo bo‘lishidan qat’i nazar, mutaxassislarimiz sizning ehtiyojlaringizga mos ravishda ishonchli, arzon va o‘z vaqtida yechimlar taqdim etadi.',
		url: 'https://homexs.com',
		siteName: 'Homex',
		images: [
			{
				url: '/icons/logo_text.svg',
				width: 1200,
				height: 630,
				alt: 'HomeX — uy va ofislar uchun texnik servis xizmati. Uy xizmatlari uchun ishonchli mutaxassislarni bir necha daqiqada chaqiring.'
			}
		],
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Homex',
		description:
			'HomeX — uy va ofislar uchun texnik servis xizmati. Uy xizmatlari uchun ishonchli mutaxassislarni bir necha daqiqada chaqiring. Kichik ta’mirlash yoki katta muammo bo‘lishidan qat’i nazar, mutaxassislarimiz sizning ehtiyojlaringizga mos ravishda ishonchli, arzon va o‘z vaqtida yechimlar taqdim etadi.',
		images: ['/icons/logo_text.svg']
	}
}
export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const messages = await getMessages()

	return (
		<html lang="uz">
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
