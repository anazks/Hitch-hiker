import React from 'react';
import './serviceDetail.css'

function ServiceCard({role,user}) {
    return ( 
        <div className="featureditems" >
        <div className="topFeature">
            <h3 className='h'><b>{role} Service</b></h3>
            <p className='p'><b>Who is a {role}?</b><br/>{user}</p>
        </div> 
    </div>
     );
}

export default ServiceCard;