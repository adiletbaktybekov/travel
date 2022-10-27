import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import img from "../../../../assets/images/margulan.png";
import {fetchTravelDetails} from "../../../../store/travel";


const TravelCurator: FC = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])
    const card: number[] = []
    for (let i: number = 1; i <= travel_details?.seats; i++) {
        card.push(i)
    }
    const mon=[travel_details]
    return (
        <>
            <div className="travelDetails-second-global">
                <div className="travelDetails-second-global-left">
                    <div className="travelDetails-second-global-left-ticket">
                        <div className="travelDetails-second-global-left-ticket-global">
                            {card.map(_=>{
                                if (travel_details?.sold_out==true){
                                    return (<div></div>)} else { return (
                                    <div>
                                        <svg className="travelDetails-second-global-left-ticket-global-icon" width="30" height="56"
                                             viewBox="0 0 30 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.7414 1.86665C17.8516 4.37778 12.1484 4.37778 10.2586 1.86665C9.59441 0.98408 8.74743 0 7.64286 0H2C0.895431 0 0 0.895431 0 2V54C0 55.1046 0.895431 56 2 56H7.64286C8.74743 56 9.59441 55.0159 10.2586 54.1334C12.1484 51.6222 17.8516 51.6222 19.7414 54.1334C20.4056 55.0159 21.2526 56 22.3571 56H28C29.1046 56 30 55.1046 30 54V2C30 0.895431 29.1046 0 28 0H22.3571C21.2526 0 20.4056 0.984081 19.7414 1.86665Z"
                                                fill="url(#paint0_linear_2_867)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_2_867" x1="1.60714" y1="1.5" x2="13.3494"
                                                                y2="56.3533" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFA400"/>
                                                    <stop offset="1" stopColor="#F99300"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>)}})}
                        </div>
                        {mon.map(_=> {
                            if (travel_details.sold_out === true) {
                                return (
                                    <div className='travelDetails-second-global-left-ticket-global-sold1'>
                                        <p>SOLD OUT!</p>
                                    </div>
                                    // <p>Sold OUT :(</p>
                                )
                            } else {
                                return (
                                    <p>Осталось {travel_details?.seats} мест из {card.length}</p>
                                )
                            }
                        })}

                    </div>
                    <div className="travelDetails-second-global-left-register">
                        <h1>12 500,00 $</h1>
                        <button>Зарегистрироваться</button>
                        <p dangerouslySetInnerHTML={{__html: travel_details?.description_ky ? travel_details.description_ky : ''}}/>
                    </div>
                </div>
                <div className="travelDetails-second-global-curator">
                    <div>
                        <p>КУРАТОР ПУТЕШЕСТВИЯ</p>
                        <h1>{travel_details.mentor?.full_name ? travel_details.mentor.full_name : ''}</h1>
                        <p className="travelDetails-second-global-curator-about"
                           dangerouslySetInnerHTML={{__html: travel_details.mentor?.short_bio_ky ? travel_details.mentor.short_bio_ky : ''}}/>
                    </div>
                    <div className="travelDetails-second-global-curator-asset">
                        <img src={img} alt="CURATOR_IMG"
                            // src={travel_details.mentor?.image ? travel_details.mentor.image : ''}
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default TravelCurator;