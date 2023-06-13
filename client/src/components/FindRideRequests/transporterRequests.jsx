import React from 'react';
import { useState,useCallback} from 'react';
import img from '../../img/start.png'
import imgg from '../../img/greenst.png'
import dot from '../../img/arrow.png'
import Axios from '../../axios/configaxios'
import useRazorpay from "react-razorpay";


function TransporterRequests({obj}) {
    const Razorpay = useRazorpay();
    const[order,setOrder] = useState('')
   const [reqButton,setReqbutton] = useState(false)
   const [pickupInput,setpickupInput]=useState(false)
   const [pickPoVal,setpickPoVal] =useState({pickPointValue:'',destinatnPoint:''})

const settrue=()=>{
    setpickupInput(!pickupInput)
}

    const reqAccept = async()=>{
        setpickupInput(false)
        if (pickPoVal.pickPointValue && pickPoVal.destinatnPoint != null) {
            let parse= localStorage.getItem('authInfo')
        let id = JSON.parse(parse)
        console.log(id._id);
          let responce =  await Axios.post('/passengeRequestAceepted',{acctBy:id._id,obJId:obj._id,pickup:pickPoVal.pickPointValue,desti:pickPoVal.destinatnPoint})
        if (responce) {
            setReqbutton(true)
        }  
        }
    }

    const handlePayment = useCallback(async (id,amount) => {
        console.log(id,amount,"id-----------")
        let data = {
            id,
            amount
        }

         await Axios.post('/createOrder',{data}).then((response)=>{
            console.log(response.data)
            setOrder(response.data)
        })
    
        const options = {
          key: "rzp_test_W8RGjInsDaKQiY",
          amount: "3000",
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id:order.id,
          handler: (res) => {
            console.log(res);
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
      }, [Razorpay]);
    

    return ( 
        <div className="TrideReqdiv d-flex justify-content-center m-2">
            <div className="ff" style={{width:'40%'}}>           
                <div className=" p-4 text-bg-dark rounded-3">
                <div className="route d-flex justify-content-between mx-4">
                   <h4><img src={imgg} alt="" style={{paddingBottom:'6px'}}/> {obj.route}</h4>
                   <div className="dotdiV my-1 "   >
                    <img src={dot} alt="" srcset="" style={{width:'30px',height:'30px'}}/>
                   </div>
                    
                   <h4><img src={img} alt="" style={{paddingBottom:'6px'}}/> {obj.routEnd}</h4> 
                </div>
                <div className="contact d-flex justify-content-center mx-4">
                    <p style={{textTransform:'capitalize'}}><b style={{color:'#D0EFF7'}}>{obj.name} &nbsp;-</b></p>&nbsp;&nbsp;
                    <p style={{color:'#D0EFF7'}}>+91 <b>{obj.contact}</b></p>
                </div>
                <div className="datatime d-flex justify-content-center mx-4 ps-4">
                    <p><b>Journey Day&nbsp;:</b> &nbsp; {obj.date}   &nbsp;,</p>&nbsp;&nbsp;
                    <p>{obj.time}</p>
                </div>
                <div className="vehicletype d-flex justify-content-center mx-4 ps-4">
                    <p ><b>Vehicle Type &nbsp;:</b><b style={{color:'#D0EFF7'}}>&nbsp;&nbsp;{obj.vehicle}</b> &nbsp;,</p>&nbsp;&nbsp; 
                    <p  style={{color:'#D0EFF7'}}><b>{obj.vehino}</b></p> 
                </div>
                <div className="vehicletype d-flex justify-content-center mx-4 ps-4">
                    <p ><b>status &nbsp;:</b><b style={{color:'#D0EFF7'}}>&nbsp;&nbsp;{obj.status}</b> &nbsp;</p>&nbsp;&nbsp; 
                    
                </div>
                <div className="divButton  d-flex justify-content-start">
                    {
                        reqButton === false ? <button className="btn  my-auto"  type="button" style={{height:'3rem',width:'6rem',backgroundColor:'white',color:'black'}} onClick={settrue} ><b>Request</b></button>:
                            <>
                                <button className="btn mx-4 my-auto"  type="button" style={{height:'3rem',width:'6rem',backgroundColor:'white',color:'black'}}  disabled ><b>SENT</b></button>
                                <button className="btn mx-4 my-auto"  type="button" style={{height:'3rem',width:'6rem',backgroundColor:'white',color:'black'}}  onClick={handlePayment(obj._id,obj.amount)}><b>PAY</b></button>

                            </>

                    }
                       
                        {
                            pickupInput&&
                            <div className="form-floating m-2" style={{maxWidth:'150px'}}>
                                 <div class="col">
                                    <input type="text" class="form-control" placeholder='From' value={pickPoVal.pickPointValue} onChange={e=> setpickPoVal({...pickPoVal,pickPointValue:e.target.value})}/>
                                </div>
                             </div>
                        }
                        {
                            pickupInput &&
                            <div className="form-floating m-2" style={{maxWidth:'150px'}}>
                                 <div class="col">
                                    <input type="text" class="form-control" placeholder='To' value={pickPoVal.destinatnPoint} onChange={e=> setpickPoVal({...pickPoVal,destinatnPoint:e.target.value})}/>
                                </div>
                             </div>
                        }
                        {
                            pickupInput   &&
                            <div className="form-floating m-2" style={{maxWidth:'150px'}}>
                        <button className="btn btn-light  mx-2 my-auto"  type="button"  onClick={reqAccept}>Ok</button>
                         </div>
                        }
                        
                </div>
                </div>
            </div>
        </div>
     );
}

export default TransporterRequests;