import React from 'react';
import Services from '../../Services/Services';
import Bannar from '../Bannar/Bannar';
import Production from '../Production/Production';


const Home = () => {
    return (

        <div>
            <Bannar></Bannar>
            <Production></Production>
            <Services></Services>
        </div>
    );
};

export default Home;