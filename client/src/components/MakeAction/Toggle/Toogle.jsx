import React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function Toggle() {
    const [state,setState]=useState(null)
    const [togle ,settogle] = useState(false)
    const [tiNg,setTinG] =useState(false)
   useEffect(()=>{
    const user =  localStorage.getItem('authInfo')
    const parseUser = JSON.parse(user)
    settogle(parseUser)
    if (parseUser.addService === 'Transporter') {
        setState('Passenger')     
    }
    if (parseUser.addService === 'Passenger') {
        setState('Transporter')
    }
   },[])

const handleToggle=()=>{
    setTinG(true)
    const chnge = state;
    console.log(chnge);
    togle.addService = chnge
    // console.log(togle);
    localStorage.setItem('authInfo',JSON.stringify(togle))
    window.location.reload()
}



    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
      }));
      
    return ( 
      <div className="toogle d-flex justify-content-start">
        <FormGroup className='my-auto pb-2 ms-2' >
        <FormControlLabel  control={<IOSSwitch sx={{ m: 1 }} onClick={handleToggle}/>}  checked={tiNg} />
       </FormGroup>
     <label htmlFor="" className='my-auto pb-2 me-3' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>{state}</b></label>
      </div>
       
    // <div className="ttogle">
    //   <IOSSwitch sx={{ m: 1 }} onClick={handleToggle}/>
    //   <label htmlFor=""> {state}</label>
    // </div>
    
  
     );
}

export default Toggle;