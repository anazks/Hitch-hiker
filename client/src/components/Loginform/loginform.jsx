import  {useState,useContext} from 'react';
import Axios from '../../axios/configaxios';
import img from './img/mosh_hamedani.jpg';
import './loginform.css';
import { userContext } from '../../static/userContext';
import { Navigate,Link } from 'react-router-dom';


function LoginForm() {
  const [userCredential,setUserCredentials] = useState({email:'',password:''})
  const {user,setUser} = useContext(userContext)
  const [notUserfind,nofindUser] = useState(false)
  const noLogin =()=>{
    nofindUser(false)
  }
  async function url(event){
    try{
       event.preventDefault()
       const response = await Axios.post('/login',userCredential);
      //  console.log(response.data);
      if (response.data.noUser) {
        // console.log(response.data.noUser);
        nofindUser(true)
        setTimeout(noLogin,2000);
      }else{
          if (response.data.admin) {
             console.log(response.data);
             setUser(response.data)
             let userData = JSON.stringify(response.data);
             localStorage.setItem('authInfo',userData)
          }else{
            console.log(response.data);
        let userData = JSON.stringify(response.data);
        setUser(userData)
        localStorage.setItem('authInfo',userData)
          }
        
      }
    }catch(error){
      console.log(error)
    }   
  } 

  if (user) {
    if (user.admin) {
      return(
        <Navigate
        to={{
          pathname:'/admin'
        }}
        />
      )
    }else{
      return(
      <Navigate
      to={{
        pathname:'/'
      }}
      />
    )
    }
    // console.log(user);
  }

    return ( 
        <div className='login'>
            <div className="container mt-3">
            <div className="logintitle">
                      {
                        notUserfind ?  <h1 className="h3  fw-normal d-flex justify-content-center" style={{color:'red'}}><b>Incorrect Email or Password</b></h1>:  <h1 className="h3  fw-normal d-flex justify-content-center"><b>Log-In</b></h1>
                      }
                    </div>
                <main className="form-signin mx-auto" style={{width: '100%',maxWidth:'300px'}}>
                    <form onSubmit={url}>
                        <div className='d-flex justify-content-center '>                      
                        <img src={img} alt=""   srcset="" style={{width:'5rem', height:'5rem', borderRadius:'50%', margin:'1rem'}}/>
                        </div>
                      <div className="form-floating m-2">
                        <input type="email" className="form-control" name='email' id='floatingInput' placeholder='Email' value={userCredential.email}  onChange={ e => setUserCredentials({...userCredential,email: e.target.value})}  required />
                        <label for="floatingInput">Email</label>
                      </div>
                      <div className="form-floating m-2">
                        <input type="password" className="form-control" name='password' placeholder='Password' id='floatingPassword'value={userCredential.password} onChange={ e => setUserCredentials({...userCredential,password: e.target.value}) } required />
                        <label for="floatingPassword">Password</label>
                      </div>
                      <button className="w-100 btn btn-lg btn-outline-dark" type="Sub"  name="Sub">Sign in</button>    
                    </form>
                   <Link to={{pathname:'/register'}}><button className="w-100 btn btn-lg btn-dark mt-2" type="Sub"  name="Sub" style={{display:'flex',justifyContent:'center'}}>Create&nbsp;<b>Hitch-Hiker</b>&nbsp;Account</button></Link>     
                  </main>
            </div>
        </div>
     );
}

export default LoginForm;