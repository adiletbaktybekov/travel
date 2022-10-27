import {ITravelState} from "./travel/interfaces/travel-interfaces";

export interface Store {
    travel:ITravelState,
    travel_details:ITravelState
    travel_faq:ITravelState
    travel_categories:ITravelState
}
