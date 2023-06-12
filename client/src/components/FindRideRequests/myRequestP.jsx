import React from 'react';
import { useState,useEffect } from 'react';
import Axios from '../../axios/configaxios'
import img from '../../img/start.png'
import imgg from '../../img/greenst.png'
import dot from '../../img/arrow.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';




function PassengerMyrequests({ob}){
const [status,setStatus] = useState(false)
const [moreDetails,setMoreDetails]=useState(false)
const [afterMoredata,setaftermoredata] =useState(false)

const [acceptedPassenger,setAceeptedPassnger]=useState({})

useEffect(()=>{
    let startPoint = ob.satingPointT
    // let pat =JSON.stringify(startPoint)
    console.log(startPoint);
    if (startPoint === null) {
        setStatus(true)
    }
},[])
const MoreDetails = async ()=>{
    setMoreDetails(!moreDetails)
    if (moreDetails === false) {
        let passengerAcceptedforT = await Axios.post('/getAcceptedPassengerforT',{passengerId:ob.acceptBy,objectId:ob._id})
        let name = passengerAcceptedforT.data[0].username
        setAceeptedPassnger(name)
    }
    console.log(acceptedPassenger);
    setaftermoredata(!afterMoredata)
}
const deletion = async()=>{
    try {
        let id =ob._id;
       let responce =await Axios.delete(`/deleteObject/${id}`) 
       console.log(responce);
        
    } catch (error) {
        console.log(error);
    }
    window.location.reload();
}

const green ={
    color:'#F59687'
}
const red ={
    color:'#94FFBE'
}
    return ( 
        <div className="TrideReqdiv d-flex justify-content-center m-2">
        <div className="ff" style={{width:'40%'}}>           
            <div className=" p-4 text-bg-dark rounded-3">
            <div className="route d-flex justify-content-between mx-4">
               <h4><img src={imgg} alt="" style={{paddingBottom:'6px'}}/>{ob.pickup}</h4>
               <div className="dotdiV my-1 "   >
                <img src={dot} alt="" srcset="" style={{width:'30px',height:'30px'}}/>
               </div>
                
               <h4><img src={img} alt="" style={{paddingBottom:'6px'}}/>{ob.destination}</h4> 
            </div>
            <div className="contact d-flex justify-content-center mx-4">
                <p style={{textTransform:'capitalize'}}><b style={{color:'#D0EFF7'}}>{ob.name} &nbsp;&nbsp;:</b></p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p style={{color:'#D0EFF7'}}>+91 <b>{ob.contact}</b></p>
            </div>
            <div className="datatime d-flex justify-content-center mx-4 ps-4">
                <p><b>Journey Day&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;{ob.date} </b>  &nbsp;,</p>&nbsp;&nbsp;
                <p style={{color:'#D0EFF7'}}><b>{ob.time}</b></p>
            </div>
            <div className="divButton  d-flex justify-content-between" style={{alignItems:'baseline'}}>
                <h6 style={{color:'#D0EFF7'}}>Status &nbsp;:</h6>
               
                <h5 style={status === false? red:green}>{status === false ?' ACCEPTED  ':'  NOT ACCEPTED YET! '}</h5>

                {
                    status === false ? <button className={moreDetails===false?'btn btn-outline-light':'btn btn-light'} type="button" onClick={MoreDetails}><b>{moreDetails === false?'MORE':'LESS'}</b></button> :<button className="btn btn-light  " type="button" onClick={deletion}><DeleteTwoToneIcon/></button>
                }
           
            </div>
            {
                afterMoredata&&
                <section className="bg-gray  section mx-auto mt-3"  >
            <div className="container">
                <div className="card">
                <div className="card-body text-dark" style={{height:'10rem',backgroundColor:'#f4f0f0',fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}>
                    <div className=" row align-items-center my-auto" style={{height:'5rem'}}>
                    <div className="col-sm-12 text-center text-sm-left " >
                        <h5 className=""><b>Accept By&nbsp;:&nbsp;{acceptedPassenger}</b></h5>
                        <div className="d-flex justify-content-around">
                        <div className="col-sm-5">
                        <p className="mb-3"><LocationOnIcon/>{ob.satingPointT}</p>
                        </div>
                        <div className="col-sm-2">
                        <p className="mb-3"><ArrowRightAltRoundedIcon/></p>
                        
                        </div>
                        <div className="col-sm-5">
                        <p className="mb-3"><LocationOnIcon/>{ob.endPointT}</p>
                        </div>
                        </div>
                       <p><b>Transporter connect you by using the contact provided.</b></p>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
            }
            </div>
        </div>
    </div>
     );
}

export default PassengerMyrequests;