import React, {FC, useEffect} from 'react';
import {BiTask} from "react-icons/bi";
import {IoIosPeople} from "react-icons/io";
import {BsCalendar3} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../../store/travel";


const TravelInfo: FC = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])
    const mon=[travel_details]
    return (
        <>
            <div className="travelDetails-info">
                <div className="travelDetails-info-global">
                    <div className="travelDetails-info-global-block">
                        <BiTask className="travelDetails-info-global-block-icon"/>
                        <div>
                            <h3 className="travelDetails-info-global-block-title">Формат</h3>
                            <p className="travelDetails-info-global-block-desc">{travel_details.category?.title_ky ? travel_details.category.title_ky : ''}</p>

                        </div>
                    </div>
                    <div className="travelDetails-info-global-block">
                        <IoIosPeople className="travelDetails-info-global-block-icon"/>
                        <div><h3 className="travelDetails-info-global-block-title">Количество мест</h3>
                            <p className="travelDetails-info-global-block-desc">
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
                                })}</p>

                        </div>
                    </div>
                    <div className="travelDetails-info-global-block">
                        <BsCalendar3 className="travelDetails-info-global-block-icon"/>
                        <div><h3 className="travelDetails-info-global-block-title">Старт</h3>
                            <p className="travelDetails-info-global-block-desc">{travel_details?.start_date ? travel_details.start_date : ''}</p>

                        </div>
                    </div>
                    <div className="travelDetails-info-global-block">
                        <AiOutlineClockCircle className="travelDetails-info-global-block-icon"/>
                        <div><h3 className="travelDetails-info-global-block-title">Длительность</h3>
                            <p className="travelDetails-info-global-block-desc">{travel_details?.duration ? travel_details.duration : ''} дней</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelInfo;