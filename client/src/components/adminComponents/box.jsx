import React from 'react';
import { useEffect,useState } from 'react';

function BoxAdmin({title,obj,objT}) {
//     const [lenght,setLenght] = useState([])
//   useEffect(()=>{
//    setLenght(obj.length)
//   },[])


    return ( 
        <div class="col-xl-12 col-md-6 pb-sm-3 m-2">
           <div class="card " style={{backgroundColor:"#7ac8cf"}}>
            <div class="card-body px-3 py-4">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="color-card">
                     <p class="mb-0 color-card-head" style={{fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif",fontFamily:"'Rubik', sans-serif" ,cursor:'pointer'}}><b>{title}</b></p>
                     <h2 class="text-white">{obj}<span class="h5">&nbsp; Requests</span>
                      </h2>
                 </div>
              <i class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"></i>
                 </div>
          <h6 class="text-white">{objT} Since last month</h6>
             </div>
            </div>
       </div>
     );
}

export default BoxAdmin;