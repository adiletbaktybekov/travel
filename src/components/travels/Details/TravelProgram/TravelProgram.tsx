import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../../store/travel";
import {MdKeyboardArrowDown} from "react-icons/md";

export interface IAccordionCard {
    days: {
        title_ru:string,
        title_ky:string,
        body_ru:string,
        body_ky:string,
        start_date:string,
        day:string,
        id:number,
        map(element: (el:any) => JSX.Element): any;
    },
}

interface IAccordionProps {
    el: IAccordionCard
}

const TravelProgram:FC<IAccordionProps> = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])
    const [active, setActive] = useState<boolean>(false)
    return (
        <>
            <h1 className="travelDetails-title">ПРОГРАММА ПУТЕШЕСТВИЯ</h1>
            <div>
                {travel_details.days? travel_details.days.map(el =>(
                    <div className={`accordion ${active ? 'active' : ''}`} key={el.id}>
                        <div className="accordion__global">
                            <div className="accordion__global" onClick={() => setActive(!active)}>
                                <div className="accordion__global-days">
                                    <p>день {el.day}</p>
                                </div>
                                <div className="accordion__global-data">
                                    <h1 className="accordion__global__title">{el.title_ky}</h1>
                                    <div className="accordion__global-data-block">
                                        <p>{el.start_date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__global__icon" onClick={() => setActive(!active)}>
                                <MdKeyboardArrowDown className="accordion__global__icon__icons"/>
                            </div>
                        </div>
                        <ol>
                            <li>
                                <div className="accordion__content">
                                    <p className="accordion__content-desc">{el.body_ky}</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                )):''}
            </div>
        </>
    );
};

export default TravelProgram;