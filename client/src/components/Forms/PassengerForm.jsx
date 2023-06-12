import React from 'react';
import { useState} from 'react';
import Axios from '../../axios/configaxios'



function PassengerForm({id}) {
    const [pickupDetail,setpickupDetail]=useState({name:'',contact:'',date:'',time:'',pickupOint:'',Destination:'',hint:'',id1:id})
 async function Psubmit(event){
    try {
        
        console.log(pickupDetail);
        const response =await Axios.post('/passengerForm',pickupDetail)
        alert(response.data.success)
    } catch (error) {
        console.log(error);
    }
 }
    return ( 
        <div className="formPassenger" id='form'>
           <h2 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>Set Details for pickup</b></h2>

           
        <form onSubmit={Psubmit} >
          {/* <input type="" className="idd" name='id' id='fInput' placeholder='id' value={id} onChange={e => setpickupDetail({id1: e.target.value})} required /> */}
            <div className="namecontact" style={{display:'flex'}}>
               <div className="form-floating m-2">
                 <input type="text" className="form-control" name='name' id='floatingInput' placeholder='Name' value={pickupDetail.name} onChange={e => setpickupDetail({...pickupDetail,name: e.target.value})} required />
                 <label for="floatingInput">Name</label>  
             </div>
             <div className="form-floating m-2">
                 <input type="text" className="form-control" name='contact' id='floatingInput1' placeholder='Contact' value={pickupDetail.contact} onChange={e => setpickupDetail({...pickupDetail,contact: e.target.value})} required />
                 <label for="floatingInput1">Contact</label>  
             </div> 
            </div>
            <div className="namecontact " style={{display:'flex'}}>
               <div className="form-floating m-2" style={{flex:'2'}}>
               
                 <input type="date" className="form-control" name='date' id='floatingInput3' placeholder='date' value={pickupDetail.date}  onChange={e=> setpickupDetail({...pickupDetail,date:e.target.value})} required  />
                 <label for="floatingInput3">Date for Journey</label>  
             </div>
             <div className="form-floating m-2" style={{flex:'1'}}>
                 <input type="time" className="form-control" name='time' id='floatingInput13' placeholder='time' value={pickupDetail.time} onChange={e=> setpickupDetail({...pickupDetail,time:e.target.value})} required />
                 <label for="floatingInput13">Est. Time</label>  
             </div> 
            </div>
             <div className="form-floating m-2">
                 <input type="text" className="form-control" name='pickup' placeholder='Password' id='location' value={pickupDetail.pickupOint} onChange={e=> setpickupDetail({...pickupDetail,pickupOint:e.target.value})} required />
                  <label for="location">Pick-up Point</label>
              </div>
              <div className="form-floating m-2">
                 <input type="text" className="form-control" name='des' placeholder='Password' id='deslocation' value={pickupDetail.Destination} onChange={e=> setpickupDetail({...pickupDetail,Destination:e.target.value})} required />
                  <label for="deslocation">Destination Point</label>
              </div>
              <div className="dentificationHint">
                <p className="fw-normal m-0 ms-1"><b>Identification Hint</b></p>
              <div className="form-floating m-2">
              <input type="text" className="form-control" name='identityy' placeholder='Password' id='identity' value={pickupDetail.hint}  onChange={e=> setpickupDetail({...pickupDetail,hint:e.target.value})} required />
                  <label for="identity">Eg: wearing  white t-shirt,men </label>
              </div>
              </div>
            <div className="submitPass d-flex justify-content-start p-2" >
            <button className="w-100 btn btn-lg btn-outline-dark" type="submit"  name="Sub" style={{maxWidth:'100px'}} >Submit</button>
            </div>  
        </form> 
        </div>

        
     );
}

export default PassengerForm;