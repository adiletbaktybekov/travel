import React, {FC, useEffect, useState} from 'react';
import {AiOutlineQuestion} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {useTravelFAQ} from "../../../../store/travel/hooks";
import {fetchTravelFAQ} from "../../../../store/travel";
import {MdKeyboardArrowDown} from "react-icons/md";

export interface IQuesAccCard {
    question: string,
    answer: string,
}

interface IQuesAccordionProps {
    el: IQuesAccCard
}

const TravelFAQ: FC<IQuesAccordionProps> = () => {
    const dispatch = useDispatch()
    const travel_faq = useTravelFAQ()
    const [active, setActive] = useState<boolean>(false)
    console.log(travel_faq, "travel_FAQ")
    useEffect(() => {
        dispatch(fetchTravelFAQ() as any)
    }, [dispatch])
    return (
        <>
            <div className="travelDetails-ninth-question">
                <div className="travelDetails-ninth-question-left">
                    <h1 className="travelDetails-title">Остались вопросы?</h1>
                    <AiOutlineQuestion className="travelDetails-ninth-question-left-icon"/>
                </div>
            </div>
            <div className="travelDetails-ninth-question-right">
                <div className="travelDetails-ninth-question-right-access">
                    {
                        travel_faq.map(el => (
                            <div className={`accordion2 ${active ? 'active' : ''}`}>
                                <div>
                                    <div className="accordion2_global" onClick={() => setActive(!active)}>
                                        <div className="accordion2_global">
                                            <div className="accordion2_global-title">
                                                <h3>{el?.question ? el.question : ''}</h3>
                                            </div>
                                        </div>
                                        <div className="accordion2_global_icon">
                                            <MdKeyboardArrowDown className="accordion2_global_icon_icons"/>
                                        </div>
                                    </div>
                                    <ol>
                                        <li>
                                            <div className="accordion2_content">
                                                <p className="accordion2_content-desc">{el?.answer ? el.answer : ''}</p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default TravelFAQ;