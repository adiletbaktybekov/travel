import React, {FC, useEffect} from 'react';
import img1 from "../../../src/assets/images/travelcard.png";
import {GiPikeman} from "react-icons/gi";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchTravel} from "../../store/travel";
import {useTravel} from "../../store/travel/hooks";

const TravelCard: FC = () => {
    const dispatch = useDispatch()
    const travel = useTravel()
    console.log(travel, "travel")
    useEffect(() => {
        dispatch(fetchTravel() as any)
    }, [dispatch])
    return (
        <>
            {
                travel.map(el => (
                    <div className="travel-second-global-block" key={el.id}>
                        <div className={`travel-second-global-block-new ${el.sold_out ?
                            'travel-second-global-block-new-sold' : ''}`}>
                            <p className={`travel-second-global-block-new-sold-desc ${el.sold_out ?
                                'travel-second-global-block-new-sold-desc' : 'travel-second-global-block-new-p'}`}>
                                {el.sold_out ? "SOLD OUT" : "Новый"}</p>
                        </div>
                        <div className="travel-second-global-block-asset">
                            <img
                                src={img1}
                                // src={el.image}
                                alt="TRAVEL_IMG"/>
                        </div>
                        <div className="travel-second-global-block-info">
                            <div className="travel-second-global-block-info-top">
                                <GiPikeman className="travel-second-global-block-info-top-icon"/>
                                <p>Путешествие</p>
                                <p>{el.duration} дней</p>
                            </div>
                            <h3>{el.title_ky}</h3>
                            <p>{el.subtitle_ky}</p>
                        </div>
                        <div className="travel-second-global-block-info-link">
                            <Link to={`/travel-details/${el.id}`}>
                                <button>Подробнее<AiOutlineArrowRight className="travel-second-global-block-info-link-icon"/></button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default TravelCard;