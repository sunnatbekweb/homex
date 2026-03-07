import { API_BASE_URL } from '@/config/env/env'
import axios from 'axios'

export const api = axios.create({
	baseURL: API_BASE_URL
})

export const getHeroVideo = async () =>
	await api.get(`/home-video/`).then(res => res.data)

export const getServices = async () =>
	await api.get(`/services/`).then(res => res.data)

export const getStatistics = async () =>
	await api.get(`/statistics/`).then(res => res.data)

export const getTestimonials = async () =>
	await api.get(`/testimonials/`).then(res => res.data)

export const getFaqs = async () => await api.get(`/faqs/`).then(res => res.data)

export const postContact = (payload: FormData) =>
	api.post(`/contact/`, payload, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
