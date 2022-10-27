import React, {FC} from 'react';
import {BsHouseDoor} from "react-icons/bs";
import {Link} from "react-router-dom";
import TravelCard from "./TravelCard";

const Travel: FC = () => {

    return (
        <>
            <section id="travel">
                <div className="container">
                    <div className="travel">
                        <div className="travel-first">
                            <p className="travel-first-desc">Путешествия /
                                <Link to="/">
                                    <BsHouseDoor style={{color: "gray"}}/>
                                </Link>
                            </p>
                            <h1>ПУТЕШЕСТВИЯ
                                ПО ВСЕМУ МИРУ</h1>
                            <p>Получайте новые знания, навыки и возможности для
                                эффективной жизни и бизнеса</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id='travel-card'>
                <div className="container">
                    <div className="travel-second">
                        <h1>БЛИЖАЙШИЕ ПУТЕШЕСТВИЯ</h1>
                        <div className="travel-second-global">
                            <TravelCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Travel;