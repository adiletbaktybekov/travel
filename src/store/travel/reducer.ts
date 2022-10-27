import {createReducer} from '@reduxjs/toolkit'
import {fetchTravelDetailsSuccess, fetchTravelFAQSuccess, fetchTravelSuccess,} from './actions'
import {ITravelState} from './interfaces/travel-interfaces'

const initialState: ITravelState = {
    travel: [],
    // @ts-ignore
    travel_details: {},
    travel_faq: [],
    travel_categories: [],
}

export default createReducer(initialState, (builder) => {
    builder.addCase(fetchTravelSuccess, (state, action) => {
        return {...state, travel: action.payload}
    })
    builder.addCase(fetchTravelDetailsSuccess, (state, action) => {
        return {...state, travel_details: action.payload}
    })
    builder.addCase(fetchTravelFAQSuccess, (state, action) => {
        return {...state, travel_faq: action.payload}
    })
})