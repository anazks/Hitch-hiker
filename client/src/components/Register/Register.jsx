import React from 'react';
import { Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from '../../axios/configaxios'

function Register() {
    const [eror,setEror] = useState(false);
    const [direct,setRedirect]= useState(false)
    const [userCredential,setUserCredentials] = useState({username:'',email:'',password:'',password1:''});
    
    const timeOutError =()=>{
        setEror(false)
    }

    async function url(event){
        try{
          event.preventDefault()
          if (userCredential.password === userCredential.password1) {
            const v = await Axios.post('/register',userCredential);
            console.log(v);
            setRedirect(true)
          }else{
            setEror(true);
            setTimeout(timeOutError,2000);
          } 
        }catch (error){
          console.log(error)
        }   
      }
      if (direct) {
        return (
          <Navigate
            to={{
              pathname: '/login'
            }}
          />
        );
       }
     
    return ( 
        <section>
            <div className="container">
                <main className="form-signin mx-auto" style={{width: '100%', maxWidth:'300px'}}>
                  <div className="img" style={{width:'8rem', height:'8rem', opacity:'1'}}><img src="img/hatandbook.svg" alt="" srcset="" style={{objectFit: 'contain', height: '8rem'}} /></div>
                  
                    <form onSubmit={url}>   
                        {
                            eror ? <h1 className="h3 mb-3 fw-normal d-flex justify-content-center" style={{color:'red',transition:'.5sec'}}><b>Password Not Match</b></h1> : <h1 className="h3 mb-3 fw-normal d-flex justify-content-center" style={{transition:'.5sec'}}><b>Sign-UP</b></h1>
                        }
                       <div style={{display:'flex'}}>
                        <div className="form-floating m-2">
                            <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Name" required onChange={e => setUserCredentials({...userCredential,username: e.target.value})} />
                            <label for="floatingInput">Name</label>
                          </div>
                          <div className="form-floating m-2" >
                            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="Email" required onChange={e => setUserCredentials({...userCredential,email: e.target.value})}/>
                            <label for="floatingInput">Email</label>
                          </div>
                       </div>
                      <div className="form-floating m-2">
                        <input type="password"  className="form-control" id="floatingInput" placeholder="password" name="password"  required onChange={e => setUserCredentials({...userCredential,password: e.target.value})}/>
                        <label for="floatingInput">Password</label>
                      </div>
                      <div className="form-floating m-2">
                        <input type="password"  className="form-control" id="floatingInput1" placeholder="password" name="cpassword"  required onChange={e => setUserCredentials({...userCredential,password1: e.target.value})}/>
                        <label for="floatingInput1"> Confirm Password</label>
                      </div>
                      <button className="w-100 btn btn-lg btn-outline-dark" type="submit" name="submit" onclick="confirmpass()">Create My <b>Hitch-Hiker</b></button>
                    </form>
                  <Link to={{pathname:'/login'}}><button className="w-100 btn btn-lg btn-dark mt-2" type="Sub"  name="Sub" style={{display:'flex',justifyContent:'center'}} >LogIn</button></Link> 
                  </main>
            </div>
      </section>
     );
}

export default Register;