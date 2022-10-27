import React, {FC, useEffect} from 'react';
import TravelCurator from "./TravelCurator/TravelCurator";
import TravelAbout from "./TravelAbout/TravelAbout";
import TravelEmotions from "./TravelEmotions/TravelEmotions";
import TravelInfo from "./TravelInfo/TravelInfo";
import TravelPeculiarities from "./TravelPeculiarities/TravelPeculiarities";
import TravelConcept from "./TravelConcept/TravelConcept";
import TravelFAQ from "./TravelFAQ/TravelFAQ";
import Request from "./TravelRequest/Request";
import TravelProgram from "./TravelProgram/TravelProgram";
import {BsHouseDoor} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../store/travel";
import {Link, useParams} from "react-router-dom";


const TravelDetails: FC = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    console.log(travel_details, "travelDetails")
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])

    const myStyle = {
        background: `url(${travel_details.image}) no-repeat center/cover`,
        height: '80vh',
    };

    return (
        <>
            <section id="travelDetails"
                // style={myStyle}
            >
                <div className="container">
                    <div className="travelDetails">
                        <div className="travelDetails-first"
                             id={id} key={travel_details.id}>
                            <div className="travelDetails-first-category">
                                <p>{travel_details.title_ky} /
                                    <Link to="/">
                                        <span style={{color: "black"}}> Путешествия /</span>
                                    </Link>
                                    <Link to="/">
                                        <BsHouseDoor className="travelDetails-first-category-house"
                                                     style={{color: "black"}}/>
                                    </Link>
                                </p>
                            </div>
                            <h1>{travel_details?.title_ky}</h1>
                        </div>
                        <TravelInfo/>
                    </div>
                </div>
            </section>
            <div id="travelDetails-sec">
                <div className="container">
                    <div className="travelDetails">
                        <div className="travelDetails-second">
                            <TravelCurator/>
                        </div>
                        <div className="travelDetails-third">
                            <TravelAbout/>
                        </div>
                        <div className="travelDetails-fourth">
                            <TravelEmotions/>
                        </div>
                        <div className="travelDetails-fifth">
                            <TravelProgram el={id}/>
                        </div>
                        <div className="travelDetails-sixth">
                            <TravelPeculiarities/>
                        </div>
                        <div className="travelDetails-seventh">
                            <TravelConcept/>
                        </div>
                        <div className="travelDetails-eighth">
                            <Request/>
                        </div>
                        <div className="travelDetails-ninth">
                            <TravelFAQ el={id}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelDetails;