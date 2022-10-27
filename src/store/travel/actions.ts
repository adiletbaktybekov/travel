import { createAction } from '@reduxjs/toolkit'
import {ITravel, ITravelDetails, ITravelFAQ} from './interfaces/travel-interfaces'

export const fetchTravelSuccess = createAction<ITravel[]>(
    'travel/fetchTravelSuccess'
)

export const fetchTravelDetailsSuccess = createAction<ITravelDetails>(
    'travelDetails/fetchTravelDetailsSuccess'
)

export const fetchTravelFAQSuccess = createAction<ITravelFAQ[]>(
    'travelFAQ/fetchTravelFAQSuccess'
)
