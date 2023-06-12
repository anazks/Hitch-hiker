import {useState,useEffect} from 'react';
import Toggle from './Toggle/Toogle';
// import {  Link,Navigate } from 'react-router-dom';
import PassengerForm from '../Forms/PassengerForm';
import TransporterForm from '../Forms/TransporterForm';
import TransporterRequests from '../FindRideRequests/transporterRequests';
import PassengerRequests from '../FindRideRequests/passengerRequsets';
import PassengerMyrequests from '../FindRideRequests/myRequestP';
import TransporterMyRequset from '../FindRideRequests/myRequestT'
import PassengerRecivedRequest from '../ReceivedRequest/pssengeRecivedRecived'
import Axios from '../../axios/configaxios'
import '../MakeAction/MakeAction.css'
import img from '../../img/passenger.svg'
import imgtransporter from '../../img/transporter.png'
import { Link } from 'react-router-dom';

function MakeAction() {
    
    const [userData,FetchUserData] = useState(null)
    const [sservice,setService] = useState(false)
    const [requestPform,setRequestPForm] = useState(false)
    const [requestTform,setRequestTform] = useState(false)
    const [grabRequestP,setGrabreq] = useState(false)
    const [grabRequestT,setGrabreqT] = useState(false)
    const [useeffectReqfetchP,setuseeffectReqfetchP] = useState(false)
    const [useeffectReqfechT,setuseeffectReqfetchT] = useState(false)
    const [noRequest ,setNoRequest] =useState(false)
    const [noRequestT ,setNoRequestT] =useState(false)
  
    const [noREquest ,setNoREquestP] =useState(false)
    const [noREquestT ,setNoREquestT] =useState(false)

    const [TransporterReqetArray, setTReqArray]=useState([])
    const [PassengerReqetArray, setPReqArray]=useState([])

    const [reqCreatedPasnger,setCreatedreqPasger] = useState([])
    const [reqCreatedTranster,setCtratedReqTrans] = useState([])


    useEffect( ()=>{
        const user =  localStorage.getItem('authInfo')
        // console.log(userContext);
        if (user) {
            // console.log(userContext);
            FetchUserData(JSON.parse(user))
            const serv = JSON.parse(user)
            // console.log(serv.addService);
            if (serv.addService === 'Passenger') {
                const getReqdata =async()=>{
                try {
              let userId = serv._id
              let data = await Axios.get(`/getPassengerCreatedRequest/${userId}`)
              const request = data.data
            //   console.log(request.length);
              if (request.length === 0) {
                setNoRequest(true)
             }else{
                setCreatedreqPasger(data.data)
             }
            } catch (error) {
                console.log(error);
            } 
            }
            getReqdata()
            }
            if (serv.addService === "Transporter") {
                setService(true)
                const getReqData = async ()=>{
                    try {
                        let userID = serv._id
                        let data = await Axios.get(`/getTransporterCreatedRequest/${userID}`)
                        const request = data.data
                        if (request.length === 0) {
                            setNoRequestT(true) 
                        }else{
                            setCtratedReqTrans(data.data)
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
                getReqData()
            }  
        }
    },[])
const requestForm =()=>{
    //PASSENGER FORM FETCHING
    if (userData.addService === 'Passenger') {
        setGrabreq(false)
        setuseeffectReqfetchP(false)
        setNoREquestP(false)
        setRequestPForm(!requestPform)
    }
    //TRANSPORTER FORM FETCHING
    if (userData.addService === 'Transporter') {
        setGrabreqT(false) 
        setuseeffectReqfetchT(false)
        setNoREquestT(false)

        setRequestTform(!requestTform) 
    }
}
const grabRequest = async()=>{
 //PASSENGER REQUEST FETCHING
    if (userData.addService === 'Passenger') {
        setRequestPForm(false)
        setuseeffectReqfetchP(false)

        const user =  localStorage.getItem('authInfo')
        const serv = JSON.parse(user)
        const id = serv._id

        try {
        const RequsT = await Axios.get(`/grabTrequsets/${id}`) 
        const request = Object.keys(RequsT.data).length
        if (request === 0) {
            setNoREquestP(true)
        }else{
        setTReqArray(RequsT.data)  
        setGrabreq(true)
        }
        } catch (error) {
            console.log(error);
        }  
    }
//TRANSPORTER REQUEST FETCHING
    if (userData.addService === 'Transporter') {
        setRequestTform(false)
        setuseeffectReqfetchT(false)

        const user =  localStorage.getItem('authInfo')
        const serv = JSON.parse(user)
        const id = serv._id

        try {
           const RequstP = await Axios.get(`/grabPrequests/${id}`) 
          const request = Object.keys(RequstP.data).length
          if (request === 0) {
          console.log(RequstP);
          setNoREquestT(true)
          }else{
            setGrabreqT(true) 
            setPReqArray(RequstP.data)  
            // console.log(noRequestT);
          }
        } catch (error) {
            console.log(error);
        }
    }
}

 const Myreq = ()=>{
    if (userData.addService==='Passenger') {
        setGrabreq(false)
        setNoREquestP(false)
        setRequestPForm(false) 
        setuseeffectReqfetchP(!useeffectReqfetchP)
    }
    if (userData.addService === 'Transporter') {
        setGrabreqT(false)
        setNoREquestT(false)
        setRequestTform(false)
        setuseeffectReqfetchT(!useeffectReqfechT)
    }
    
 }

    return ( 
         <div className="actionPage">
            <div className="d-flex justify-content-center DivisionFlex" style={{marginBottom:'-50px'}}>
            <div className='actionDiv '>
                <div className="topFlex d-flex justify-content-between">
                 <div className='topBlock m-2'>
                {
                userData && <h4 className='titleName'><b>#You_are_a_{userData.addService}</b></h4>
                }
                {
                sservice === true ? <div className='icon'> <img src={imgtransporter} alt="" className='iconss'/></div>:
                    <div className='icon'> <img src={img} alt="" className='iconss'/></div>
                }               
            </div> 
            <Toggle  />  
                </div>
            
            <div className='bottomBlock mx-auto'>
                <div className='action '>
                <div className='left my-1'>
                    <div className="leftButton d-flex justify-content-center" style={{height:'5rem',marginTop:'4rem'}}>
                        <div className="leftbuttonSep d-block  my-auto">
                            <div className="buttons d-flex justify-content-center ">
                            {
                              sservice === true ? <a href="#formDivvs"> <button type="button" class="btn  btn-dark mx-1 " style={{border:'2px solid black',height:'4rem'}} onClick={requestForm}>Create Ride</button></a>: <a href="#formDivvs"><button type="button" class="btn  btn-dark mx-1 " style={{border:'2px solid black',height:'4rem'}} onClick={requestForm}>Create Request</button></a>
                            }
                            </div>
                            
                        </div>
                        <div className="leftbuttonSep d-block  my-auto m-2" >
                            <div className="buttons d-flex justify-content-center">
                              {
                            sservice === true ?<a href="#requests"> <button type="button" class="btn  btn-outline-dark mx-1 " style={{height:'4rem'}}  onClick={grabRequest} >Find a Passenger</button></a>:<a href="#requests"><button type="button" class="btn  btn-outline-dark mx-1 " style={{height:'4rem'}} onClick={grabRequest}>Find a Traveller</button></a>
                            }  
                            </div>
                            {/* <div className='d-flex justify-content-center mx-3 m-2' style={{height:'3rem',width:'12rem'}}>
                                {
                                    sservice === true ? <button type="button" class="btn  btn-outline-dark mx-1 px-1 " style={{height:'4rem',width:'11rem'}}  >Passenger Ride Requests:&nbsp;<span><b>1</b></span></button>: <button type="button" class="btn  btn-outline-dark mx-1 px-1 " style={{height:'4rem',width:'12rem'}}  >Transporters Ride Requests:&nbsp;<span><b>1</b></span></button>
                                }
                           
                            </div> */}
                        </div> 
                        
                    </div>
                    <div className='d-flex justify-content-center mx-auto m-2' style={{height:'3rem',width:'12rem'}}>
                                {
                                  sservice=== true ?  <a href="#myrequests"><button type="button" class="btn btn-outline-dark  px-1 " style={{height:'3rem',width:'9rem',backgroundColor:'#f4f0f0',color:'black'}}  onClick={Myreq}><b>My Rides</b> </button></a>: <a href="#myrequests"><button type="button" class="btn  btn-outline-dark  px-1 " style={{height:'3rem',width:'9rem',backgroundColor:'#f4f0f0',color:'black'}} onClick={Myreq} ><b>My Requests</b></button></a>
                                }
                            </div>
                </div>
                <div className='right my-1'>
                    <div className="map">
                        <div className="leftButton d-flex justify-content-center">
                        <div className="buttonsLive">
                            <div className="live">
                               <Link to={{pathname:'/map'}}> <button type="button" class="btn  btn-outline-danger btn-lg mx-1">Go Live</button></Link>    
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> 
            
            </div>
            
            {
                requestPform && 
                 <div className="formDiv d-flex justify-content-center" id='formDivvs' >
                  <PassengerForm id={userData._id}/>
                  </div>
            }
            {
                requestTform && 
                <div className="formDiv d-flex justify-content-center" id='formDivvs' >
                <TransporterForm id={userData._id}/>
                </div>
            }
            {
                noREquest  && 
               <div className="requs d-block " id='requests'>
                <h1 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>Travellers</b></h1>
                <h3 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif",marginTop:'2rem'}}><b>Travellers currently Unavailable</b></h3>
               </div>

            }
            {
                grabRequestP && 
               <div className="requs d-block " id='requests'>
                 <h1 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>Travellers</b></h1>
                
                {  TransporterReqetArray.map(obj =>{
                    return(
                    <TransporterRequests obj={obj} />
                    )
                })
                }
                </div>
            }
            {
                noREquestT && 
                <div className="requs d-block " id='requests'>
                <h1 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>Passengers</b></h1>
                <h3 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif",marginTop:'2rem'}}><b>Passengers currently Unavailable</b></h3>
               </div>

            }
            {
                grabRequestT && 
               <div className="requs d-block " id='requests'>
                 <h1 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>Passengers</b></h1>
                {PassengerReqetArray.map(obj =>{
                    return(
                    <PassengerRequests obj={obj} />
                    )
                })
                }
                </div>
            }   
            {
                useeffectReqfetchP &&
                <div className="requs d-block " id='myrequests'>
                 <h1 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>My Requests</b></h1>
                 {
                    noRequest === true &&
                    <h3 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif",marginTop:'2rem'}}><b>No Requests Created</b></h3>
                 }               
                {  
                reqCreatedPasnger.map(ob =>{
                    return(
                         <PassengerMyrequests ob={ob} />
                    )  
                })
                }
                </div>

            }
            {
            useeffectReqfechT&&
            <div className="requs d-block " id='myrequests'>
                 <h1 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}><b>My Rides</b></h1>
                 {
                    noRequestT === true &&
                    <h3 className='d-flex justify-content-center' style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif",marginTop:'2rem'}}><b>No Rides Created</b></h3>
                 } 
                {  reqCreatedTranster.map(ob =>{
                    return(
                        <TransporterMyRequset ob={ob} />
                    )
                })
                }
                </div> 
            }
            <PassengerRecivedRequest/>    
         </div>
     );
}

export default MakeAction;