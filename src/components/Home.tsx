import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Travel from "./travels/Travel";
import TravelDetails from "./travels/Details/TravelDetails";

const Home:FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Travel/>}/>
                <Route path={'/travel-details/:id/'} element={<TravelDetails/>}/>
            </Routes>
        </>
    );
};

export default Home;