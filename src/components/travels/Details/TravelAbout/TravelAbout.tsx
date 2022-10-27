import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import img234 from '../../../../assets/images/traveldetailsabout.png';
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../../store/travel";

const TravelAbout: FC = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])
    const mon=[travel_details]
    return (
        <>
            <h1 className="travelDetails-title">ПРО ПУТЕШЕСТВИЕ</h1>
            <div className="travelDetails-third-about">
                <div className="travelDetails-third-about-first">
                    <h3>Описание экспедиционного тура:</h3>
                    <p dangerouslySetInnerHTML={{__html: travel_details?.description_ky ? travel_details.description_ky : ''}}/>
                    <div className="travelDetails-third-about-first-block">
                        <div>
                            <h3>Формат:</h3>
                            <p>{travel_details?.title_ky ? travel_details.title_ky : ''}</p>
                        </div>
                        <div>
                            <h3>Количество мест:</h3>
                            {mon.map(_=> {
                                if (travel_details.sold_out === true) {
                                    return (
                                        <p>Sold out</p>
                                    )
                                } else {
                                    return (
                                        <p>Всего  {travel_details?.seats ? travel_details.seats : ''} мест</p>
                                    )
                                }
                            })}
                        </div>
                        <div>
                            <h3>Старт:</h3>
                            <p>{travel_details?.start_date ? travel_details.start_date : ''}</p>
                        </div>
                        <div>
                            <h3>Длительность:</h3>
                            <p>{travel_details?.duration ? travel_details.duration : ''} дней</p>
                        </div>
                    </div>
                </div>
                <img src={img234}
                    // src={travel_details?.image ? travel_details.image : ''}
                     alt="TRAVEL_ABOUT_IMAGE"/>
            </div>
            <button>Зарегистрироваться</button>
        </>
    );
};

export default TravelAbout;