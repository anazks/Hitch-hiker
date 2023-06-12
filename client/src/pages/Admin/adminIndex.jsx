import React from 'react';
import { useState,useEffect } from 'react';
import Axios from '../../axios/configaxios'
import AnalaticDivision from '../../components/adminComponents/analaticDiv';
import BoxAdmin from '../../components/adminComponents/box';
import SideBar from '../../components/adminComponents/sideBar';

function AdminIndex() {
  const [transporters,setTransporters]=useState([])
  const [passengers,setpassengers]=useState([])

  useEffect(()=>{

    const transporterss= async()=>{
    let res = await Axios.get('/allTransporters')
    let pasRes = await Axios.get('/allPassengers')
    // console.log(pasRes.data);
    // console.log(res.data);
    setTransporters(res.data)
    setpassengers(pasRes.data)
    }
    transporterss()

},[])


    return (
        <React.Fragment>
          <AnalaticDivision/>
          <div className='d-flex' style={{width:'100vw',height:'100vh'}} >
            <SideBar />
            <div  style={{width:'17rem',}}>  
             <BoxAdmin title={'Transporters'} obj={transporters.length} objT={'20.433%'}/>  
             <BoxAdmin title={'Passenger'} obj={passengers.length} objT={'34.553%'}/>  
             <BoxAdmin title={'Total'} obj={transporters.length + passengers.length} objT={'60.424%'} />               
           </div> 
           
          </div>
               
        </React.Fragment> 
        
     );
}

export default AdminIndex;