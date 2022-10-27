import React, {FC, useEffect} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../../store/travel";

const TravelConcept: FC = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])

    return (
        <>
            <div className="travelDetails-seventh-concept">
                <div className="travelDetails-seventh-concept-left">
                    <h1>КОНЦЕПЦИЯ ПУТЕШЕСТВИЯ</h1>
                </div>
                <div className="travelDetails-seventh-concept-blocks">
                    <div className="travelDetails-seventh-concept-blocks-right">
                        <div className="travelDetails-seventh-concept-blocks-right-block">
                            <AiOutlineArrowRight className="travelDetails-seventh-concept-blocks-right-block-icon"/>
                            <p dangerouslySetInnerHTML={{__html: travel_details?.concept_for_travel_ky ? travel_details.concept_for_travel_ky : ''}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelConcept;