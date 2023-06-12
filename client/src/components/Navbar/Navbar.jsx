import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/iconcar.png';
import '../Navbar/Navbar.css'



function Navbar(){

   const [navbar,setNavbar] = useState(true)
   const [user,setUser]=useState(null)
   
   useEffect(()=>{
      const dataStr = localStorage.getItem('authInfo') 
      if (dataStr){
        setUser(JSON.parse(dataStr))
      }
   },[])

   const logout =  ()=>{
      localStorage.clear('authInfo') 
      setUser(null);
      window.location.href = "/";
   }

   const changeNavbarOpacity =()=>{
      if (window.scrollY >= 80) {
         setNavbar(false)
      }else{
         setNavbar(true)
      }
   }
   window.addEventListener('scroll',changeNavbarOpacity);

    return ( 
        
         <div className= {navbar? 'wrapper':'active'} >
            <div className="leftNav">
            <div className={navbar?'iconNav':'iconNav1'}>
           <img src={img} alt="" srcset="" style={{width:'5rem',height:'5rem'}}/>
           </div>
         </div>
         <div className={navbar?'center':'centerScroll'}>
            <Link to={{pathname:'/'}} style={{textDecoration:'none'}}> <h1 className={navbar?'leaves':'leaveScroll'}><b>Hitch-Hiker</b></h1></Link>
          
         </div> 
         <div className="rightNav">
            <div className='logout'>
               <div className="centerRight">
                {
               user && <button type="button" class="btn btn-dark" onClick={logout}>LogOut</button>
                }  
               </div>
               <div className="rightFont">
               {
               user&& <p>Name: {user.username}</p>
               }
               </div>
         </div>
         </div>       
         </div>       
        
     );
}

export default Navbar;

