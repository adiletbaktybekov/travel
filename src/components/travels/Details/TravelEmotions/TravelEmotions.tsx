import React, {FC, useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTravelDetails} from "../../../../store/travel/hooks";
import {fetchTravelDetails} from "../../../../store/travel";

const TravelEmotions: FC = () => {
    const {id}: any = useParams()
    const dispatch = useDispatch()
    const travel_details = useTravelDetails()
    useEffect(() => {
        dispatch(fetchTravelDetails(id) as any)
    }, [dispatch])
    const settings12 = {
        dots: false,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="travelDetails">
                <h1 className="travelDetails-title">ОСОБЕННОСТИ И ЭМОЦИИ</h1>
            </div>
            <Slider {...settings12}>
                {travel_details.reviews? travel_details.reviews.map(el =>(
                    <div>
                        <div className="travelDetails-fourth-global">
                            <div className="travelDetails-fourth-global-left">
                                <iframe className="travelDetails-fourth-global-left-img" src={el.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="travelDetails-fourth-global-right">
                                <h3>{el.text}</h3>
                            </div>
                        </div>
                    </div>
                )):''}
            </Slider>
        </>
    );
};

export default TravelEmotions;