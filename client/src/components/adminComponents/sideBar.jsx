import React from 'react';
import img from '../../img/transporter.png'
import imgg from '../../img/passenger.svg'
import ana from '../../img/ana.png'



function SideBar({obj}) {



    return ( 
      <div className="sidebr m-2" style={{width:'14rem',height:'90vh'}}>
        <div className="sidebar m-auto"  style={{width:'100%',height:'100%',backgroundColor:'#c4eae2',borderRadius:'10px'}} >
            <div className="d-block" style={{height:'100%'}}>
                <div className="top" style={{height:'80%'}}>
                    <div className="optionButton " style={{width:'100%',height:'20%',paddingTop:'2rem'}}>
                        
                            <div className="options d-flex ms-4    " style={{width:'90%',height:'3rem',borderRadius:'5px'}}>
                                <h4 className='pt-3' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif",fontFamily:"'Rubik', sans-serif",cursor:'pointer' }} ><b>Trasporters</b></h4>
                                <div className="img pt-3 ps-1" style={{height:'2rem',width:'2rem'}}>
                                    <img src={img} alt="" srcset="" style={{height:'2rem',width:'2rem'}} />
                                </div>
                            </div>
                            
                    </div>
                    <div className="optionButton " style={{width:'100%',height:'20%',paddingTop:'2rem'}}>
                        
                            <div className="options d-flex ms-4  " style={{width:'90%',height:'3rem',borderRadius:'5px'}}>
                                <h4 className='pt-3' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif",fontFamily:"'Rubik', sans-serif" ,cursor:'pointer'}}><b>Passengers</b></h4>
                                <div className="img pt-3 ps-1" style={{height:'2rem',width:'2rem'}}>
                                    <img src={imgg} alt="" srcset="" style={{height:'2rem',width:'2rem'}} />
                                </div>
                            </div>
                            
                    </div>
                    <div className="optionButton " style={{width:'100%',height:'20%',paddingTop:'2rem'}}>
                        
                            <div className="options d-flex ms-4  " style={{width:'90%',height:'3rem',borderRadius:'5px'}}>
                               <h4 className='pt-3' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif",fontFamily:"'Rubik', sans-serif" ,cursor:'pointer'}}> <b>Analytics</b></h4>
                               <div className="img pt-3 ps-1" style={{height:'2rem',width:'2rem'}}>
                                    <img src={ana} alt="" srcset="" style={{height:'2rem',width:'2rem'}} />
                                </div>
                            </div>
                            
                    </div>
                </div>
                <div className="bottom" style={{height:'20%',borderTop:'3px solid #7ac8cf'}}>
                    <div className='d-flex justify-content-center mt-3'>
                        <h3  style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif",fontFamily:"'Rubik', sans-serif",color:'#7ac8cf',cursor:'pointer' }}><b>Hitch-Hiker</b></h3>  
                    </div>
                    <div className='d-flex justify-content-center'>
                    <p style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif",fontFamily:"'Rubik', sans-serif",color:'#7ac8cf',cursor:'pointer' }} >ADMIN LOG</p>  
                    </div>
                </div>
            </div>
        </div>
      </div>

     );
}

export default SideBar;