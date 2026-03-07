import { API_BASE_URL } from '@/config/env/env'
import { IContact } from '@/types'
import axios from 'axios'

export const api = axios.create({
	baseURL: API_BASE_URL
})

export const getServices = async () =>
	await api.get(`/services/`).then(res => res.data)

export const getStatistics = async () =>
	await api.get(`/statistics`).then(res => res.data)

export const getTestimonials = async () =>
	await api.get(`/testimonials/`).then(res => res.data)

export const getFaqs = async () => await api.get(`/faqs/`).then(res => res.data)

export const postContact = (payload: IContact) => api.post(`/contact/`, payload)
