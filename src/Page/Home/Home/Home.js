import React from 'react';
import Services from '../../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Bannar from '../Bannar/Bannar';
import Production from '../Production/Production';


const Home = () => {
    return (

        <div>
            <Bannar></Bannar>
            <Production></Production>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;