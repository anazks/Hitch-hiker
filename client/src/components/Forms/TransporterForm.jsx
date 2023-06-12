import React, { useState } from 'react';
import Axios from '../../axios/configaxios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import img from '../../img/dot.png'
import Select from '@mui/material/Select';


function TransporterForm({id}) {
    const [routeDetail,setRoutedetail] = useState({name:'',contact:'',vehicle:'',vehino:'',route:'',routEnd:'',hint:'',date:'',time:'',id1:id})
    async function Tsubmit(event) {
        try {
            
            console.log(routeDetail);
            const response =await Axios.post('/transporterForm',routeDetail)
            alert(response.data.success)
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div className="formPassenger" id='form'>
           <h2 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>Set Journey Details</b></h2>
        <form onSubmit={Tsubmit}>
            <div className="namecontact" style={{display:'flex'}}>
               <div className="form-floating m-2">
                 <input type="text" className="form-control" name='name' id='floatingInput' placeholder='Name' value={routeDetail.name} onChange={e => setRoutedetail({...routeDetail,name:e.target.value})}   required />
                 <label for="floatingInput">Name</label>  
             </div>
             <div className="form-floating m-2">
                 <input type="text" className="form-control" name='contact' id='floatingInput11' placeholder='Contact' value={routeDetail.contact}  onChange={e => setRoutedetail({...routeDetail,contact:e.target.value})}  required />
                 <label for="floatingInput11">Contact</label>  
             </div> 
            </div>
             <div className="d-flex">
                <div className="form-floating m-2" style={{flex:'2'}}>
               
                 <input type="date" className="form-control" name='date' id='floatingInput3' placeholder='date' value={routeDetail.date}  onChange={e=> setRoutedetail({...routeDetail,date:e.target.value})} required  />
                 <label for="floatingInput3">Date for Journey</label>  
             </div>
             <div className="form-floating m-2" style={{flex:'1'}}>
                 <input type="time" className="form-control" name='time' id='floatingInput13' placeholder='time' value={routeDetail.time} onChange={e=> setRoutedetail({...routeDetail,time:e.target.value})} required />
                 <label for="floatingInput13">Est. Time</label>  
             </div>
             </div>
            
             <div className="d-flex">
                <div className="form-floating m-2">
                 <input type="text" className="form-control" name='routeStart' placeholder='' id='location' value={routeDetail.route} onChange={e => setRoutedetail({...routeDetail,route:e.target.value})} required />
                  <label for="location">From</label>
              </div>
              <div className="dot my-auto" >
                <img src={img} alt="" srcset=""style={{width:'30px',height:'30px'}}  />
              </div>
              
              <div className="form-floating m-2">
                 <input type="text" className="form-control" name='routeEnd' placeholder='' id='location' value={routeDetail.routEnd} onChange={e => setRoutedetail({...routeDetail,routEnd:e.target.value})} required />
                  <label for="location">To</label>
              </div>
             </div>
             
              <div className="vehicle" style={{display:'flex'}}>
              <div className="form-floating m-2">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Vechicle</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={routeDetail.vehicle}
                    label="Age"
                    onChange={e => setRoutedetail({...routeDetail,vehicle:e.target.value})}
                    >
                    <MenuItem value={'Car'}>Car</MenuItem>
                    <MenuItem value={'Bike'}>Bike</MenuItem>
                    <MenuItem value={'Auto'}>Auto</MenuItem>
                    <MenuItem value={'Heavy Vehicles'}>Heavy Vehicles</MenuItem>
                    </Select>
                </FormControl>
                </Box>
              </div>
              <div className="form-floating m-2">
                 <input type="text" className="form-control" name='route' placeholder='vehi no,' id='vehino.' value={routeDetail.vehino} onChange={e => setRoutedetail({...routeDetail,vehino:e.target.value})} required />
                  <label for="vehino.">Vehicle number</label>
              </div>
              </div>
              
              <div className="dentificationHint">
                <p className="fw-normal m-0 ms-1"><b>Identification Hint</b></p>
              <div className="form-floating m-2">
              <input type="text" className="form-control" name='password' placeholder='Password' id='identity' value={routeDetail.hint} onChange={e => setRoutedetail({...routeDetail,hint:e.target.value})}  required />
                  <label for="identity">Eg: A Black Ford mustang. </label>
              </div>
              </div>
            <div className="submitPass d-flex justify-content-start p-2" >
            <button className="w-100 btn btn-lg btn-outline-dark" type="Sub"  name="Sub" style={{maxWidth:'100px'}}>Submit</button>
            </div>
            
        </form> 
        </div>
     );
}

export default TransporterForm;