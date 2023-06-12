import {useEffect,useState,useContext} from 'react';
import { Link,Navigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../Home/homeButton.css';
import { userServiceContext } from '../../static/userServiceContext';



function HomeButton(){

  // const {servicee, seletedService} = useContext(userServiceContext)
  const [service,setService]= useState(null)
  const [settService,setSelectedservice]=useState('')
  const [showDiv, setShowDiv] = useState(false);
  const [user,setUser]=useState(null)
  const [adminRredirect,setIt] =useState(false)
  
  useEffect(()=>{
    const dataStr = localStorage.getItem('authInfo')
    // console.log(dataStr);
    if (dataStr) {
      let data = JSON.parse(dataStr)
      if (data.admin) {
       setIt(true)  
      }else{
        setUser(data)
        setService(data)
        console.log(dataStr);
      }  
    }
    
  },[])


if (adminRredirect) {
  return(
    <Navigate to={{pathname:'/admin'}}
    />
  )
}

    const navigation= ()=>{ 
        setShowDiv(!showDiv)
    }
const selectService =()=>{

  setSelectedservice('Passenger')
  console.log(service);
}
const selectServicee =()=>{
  setSelectedservice('Transporter') 

}
const localstrUpdate=()=>{
    // seletedService(settService)
    // console.log(servicee);
    // localStorage.setItem('servInfo',{service : settService})

    const updateStrg = service 
    updateStrg.addService = settService
    // console.log(updateStrg);
    localStorage.setItem('authInfo',JSON.stringify(updateStrg))
}
    
    return (    
       <div className='d-flex justify-content-center centerspace' >
        <div className='centerDiv'>
          <div style={{width:'12rem',height:'4rem'}} className="Lbutton m-auto d-flex justify-content-center">
            {
              user?<button type="button" class="btn btn-dark btn-lg"  style={{height:'4rem',width:'12rem'}} onClick={navigation}>Select Service</button>:
             <Link to={{pathname:'/login'}}><button type="button" class="btn btn-dark btn-lg"  style={{height:'4rem',width:'12rem'}} >Get Started</button></Link> 
            }
            
          </div>
          {
            showDiv && 
            <div className="radio" style={{justifyContent:'center',display:'flex',padding:'2px'}}>
            <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="passenger"
              name="radio-buttons-group"
            >
              {/* <input type="radio" name="choose" id="" value='Passenger' /> */}
              <FormControlLabel  control={<Radio   value="Passenger" checked={ settService === 'Passenger' } onChange={selectService}/>} label="I'm a Passenger" />
              <FormControlLabel  control={<Radio  value="Transporter" checked={ settService === 'Transporter'} onChange={selectServicee}/>} label="I'm a Transporter" />
              {
                settService && <Link to={{pathname:'/action'}}><button type="button" class="btn btn-dark" onClick={localstrUpdate}>OK</button></Link>
              }
              
            </RadioGroup>
           </FormControl>
            </div>
            
          }
          <div style={{width:'100%',height:'4rem',margin:"auto",textAlign:'center',fontSize:'25px'}} className="d-flex LbuttonText m-2">
            <p><b>Get your traveling partner & Enjoy your Journey!!</b></p>
          </div>
        </div>
       </div>
     );
}

export default HomeButton;