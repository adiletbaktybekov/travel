import {AxiosResponse} from 'axios'
import {Dispatch} from '@reduxjs/toolkit'
import API from '../../constants/API'
import {
    fetchTravelDetailsSuccess,
    fetchTravelFAQSuccess,
    fetchTravelSuccess
} from './actions'

// https://webilim.herokuapp.com/ky/api/v2/travel-list/

export const fetchTravel = () => async (dispatch: Dispatch) => {
    try {
        const res: AxiosResponse = await API.get('/ky/api/v2/travel-list/')
        dispatch(fetchTravelSuccess(res.data))
    } catch (e) {
        console.log(e)
    }
}

// https://webilim.herokuapp.com/ky/api/v2/travel-detail/${id}/

export const fetchTravelDetails = (id: number) => async (dispatch: Dispatch) => {
    try {
        const res: AxiosResponse = await API.get(`/ky/api/v2/travel-detail/${id}/`)
        dispatch(fetchTravelDetailsSuccess(res.data))
    } catch (e) {
        console.log(e)
    }
}

// https://webilim.herokuapp.com/ky/api/v2/travel-faq-list/

export const fetchTravelFAQ = () => async (dispatch: Dispatch) => {
    try {
        const res: AxiosResponse = await API.get('/ky/api/v2/travel-faq-list/')
        dispatch(fetchTravelFAQSuccess(res.data))
    } catch (e) {
        console.log(e)
    }
}