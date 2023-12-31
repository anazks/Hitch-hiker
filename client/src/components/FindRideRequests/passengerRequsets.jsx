import React from 'react';
import { useState } from 'react';
import img from '../../img/start.png'
import imgg from '../../img/greenst.png'
import dot from '../../img/arrow.png'
import Axios from '../../axios/configaxios'


function PassengerRequests({obj}) {
    const [reqButton,setReqbutton] = useState(false)
    const [pickupInput,setpickupInput]=useState(false)
    const [pickPoVal,setpickPoVal] =useState({pickPointValue:'',destinatnPoint:''})
 
    const settrue = ()=>{
        setpickupInput(!pickupInput)
    }

    const reqAccept= async()=>{
        setpickupInput(false)
        let pickup = pickPoVal.pickPointValue
        let des = pickPoVal.destinatnPoint
        if (pickup && des != null) {
            let parse =  localStorage.getItem('authInfo')
             let id = JSON.parse(parse)
             let responce = await Axios.post('/transporterRequestAccepted',{ acceptBy:id._id, objId:obj._id, startingPoint:pickPoVal.pickPointValue, endPoint:pickPoVal.destinatnPoint})
        if (responce) {
            setReqbutton(true)
        }
        }
    }

    return ( 
        <div className="TrideReqdiv d-flex justify-content-center m-2">
            <div className="ff" style={{width:'40%'}}>           
                <div className=" p-4 text-bg-dark rounded-3">
                <div className="route d-flex justify-content-between mx-4">
                   <h4><img src={imgg} alt="" style={{paddingBottom:'6px'}}/>{obj.pickup}</h4>
                   <div className="dotdiV my-1 "   >
                    <img src={dot} alt="" srcset="" style={{width:'30px',height:'30px'}}/>
                   </div>
                    
                   <h4><img src={img} alt="" style={{paddingBottom:'6px'}}/>{obj.destination}</h4> 
                </div>
                <div className="contact d-flex justify-content-center mx-4">
                    <p style={{textTransform:'capitalize'}}><b style={{color:'#D0EFF7'}}>{obj.name} &nbsp;&nbsp;-</b></p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{color:'#D0EFF7'}}>+91 <b>{obj.contact}</b> </p>
                </div>
                <div className="datatime d-flex justify-content-center mx-4 ps-4">
                    <p><b>Journey Day&nbsp;&nbsp;:</b>&nbsp; <b>{obj.date}</b>&nbsp;,</p>&nbsp;&nbsp;
                    <p><b>{obj.time}</b></p>
                </div>
                {/* <div className="vehicletype d-flex justify-content-start mx-4 ps-4">
                    <p >Vehicle Type: &nbsp;<b style={{color:'#7FFFDC'}}>hehi</b> &nbsp;,</p>&nbsp;&nbsp; 
                    <p  style={{color:'#7FFFDC'}}><b>vehi no.</b></p> 
                </div> */}
                <div className="divButton   d-flex justify-content-start">
                    {
                        reqButton === false ?<button className="btn   my-auto"  type="button" style={{height:'3rem',width:'6rem',backgroundColor:'white',color:'black'}} onClick={settrue} ><b>PICK-UP</b></button>:
                        <button className="btn btn-light  " type="button" disabled><b>SENT</b></button>
                    }
                    {
                            pickupInput&&
                            <div className="form-floating m-2" style={{maxWidth:'100px'}}>
                                 <div class="col">
                                    <input type="text" class="form-control" style={{marginRight:'3rem'}} placeholder='From' value={pickPoVal.pickPointValue} onChange={e=> setpickPoVal({...pickPoVal,pickPointValue:e.target.value})}/>
                                </div>
                             </div>
                        }
                    {
                        pickupInput &&
                        <div className="form-floating m-2" style={{maxWidth:'100px'}}>
                                 <div class="col">
                                    <input type="text" class="form-control"  placeholder='To' value={pickPoVal.destinatnPoint} onChange={e=> setpickPoVal({...pickPoVal,destinatnPoint:e.target.value})}/>
                                </div>
                             </div>

                    }
                    {
                            pickupInput   &&
                            <div className="form-floating my-auto" style={{maxWidth:'150px'}}>
                        <button className="btn btn-light  "  type="button"  onClick={reqAccept}>Ok</button>
                         </div>
                        }
                
                </div>
                </div>
            </div>
        </div>
        
     );
}

export default PassengerRequests;