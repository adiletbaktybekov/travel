import React, {FC, useEffect} from 'react';
import {AiOutlineCheckSquare} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../../store/travel";

const TravelPeculiarities: FC = () => {
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails as any)
    }, [dispatch])
    return (
        <>
            <div className="travelDetails-sixth-peculiarities">
                {travel_details?.peculiarities ? travel_details.peculiarities.map(el => (
                    <div className="travelDetails-sixth-peculiarities-block">
                        <div className="travelDetails-sixth-peculiarities-top">
                            <AiOutlineCheckSquare className="travelDetails-sixth-peculiarities-icon"/>
                        </div>
                        <div>
                            <h3>{el.title_ky}</h3>
                            <p>{el.description_ky}</p>
                        </div>
                    </div>
                )) : ""}
            </div>
        </>
    );
};

export default TravelPeculiarities;