import React from 'react';
import HomeButton from '../components/Home/homeButton';
import ServiceCard from '../components/serviceDetail/serviceCard';

function HomePage(){
    let p='Passenger'
    let passenger = 'User who wants to Travel somewhere and searching other travellers called Transporters who are in a common route & able to get them to their Destination, For that service passengers are supposed to pay the fuel price accroding to the distance to the Transporters.'
    let transporter ="Users those who have vehicle & willing to help passengers for their journey thereby get them to their destination. A Transporter's journey would be in a common route of the passenger."
    let t='Transporter'
    return( 
        <div className='home'>
            <HomeButton/>
            <ServiceCard role={p} user={passenger}/>
            <ServiceCard role={t} user={transporter}/>
        </div>
    );
}

export default HomePage;