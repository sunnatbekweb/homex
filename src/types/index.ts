export interface IContact {
	name: string
	phone: string
	service: number
	extra_notes: string
}

export interface IService {
	id: number
	icon: string
	image: string
	title_en: string
	title_uz: string
	title_ru: string
	features: IServiceFeatures[]
}

interface IServiceFeatures {
	id: number
	title_uz: string
	title_ru: string
	title_en: string
}

export interface ITestimonials {
	id: number
	service: number
	avatar: string
	comment_en: string
	comment_uz: string
	comment_ru: string
	customer_name: string
	title_uz: string
	title_ru: string
	title_en: string
}

export interface IFaq {
	id: number
	question_uz: string
	question_ru: string
	question_en: string
	answer_uz: string
	answer_ru: string
	answer_en: string
}

export type TLocale = 'en' | 'ru' | 'uz'
