import { useMemo,useEffect,useState} from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home";
import ActionPage from "./pages/ActionPage/Actionpage";
import Login from "./pages/login";
// import RegisterPage from "./pages/Register";
import MapContainer from "./pages/Map/map";
import  AdminIndex from "./pages/Admin/adminIndex";
import Footer from "./components/Footer/Footer";
import { userContext } from "./static/userContext";
import { userServiceContext } from "./static/userServiceContext";
import Register from "./components/Register/Register";


function App() {

  const [servicee, seletedService] = useState(null)
  const serviceValue = useMemo(()=>({servicee,seletedService}),[servicee,seletedService])
  const [user,setUser]=useState(null)
  const value = useMemo(()=>({user,setUser}),[user,setUser])
  useEffect(()=>{
    const dataStr = localStorage.getItem('authInfo')
    if (dataStr) {
      setUser(JSON.parse(dataStr))
    }
  },[]) 
if (serviceValue) {
  // console.log(serviceValue);
      // console.log(value);
}
  const Layout =() =>{
    return(
      <div className="app" >
        <userContext.Provider value={value}>
          
               <Navbar/>
               <Outlet/>
               <Footer/>

        </userContext.Provider>
      </div>
    )
  }
  
const router = createBrowserRouter([
  {
    path:"/",
    element: 
    <userServiceContext.Provider serviceValue={serviceValue}>
      <Layout/>
      </userServiceContext.Provider>,
    children:[
      {
        path:"/", 
        element:<HomePage/>
      },
      {
        path:"/action",
        element:<ActionPage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/admin",
        element:<AdminIndex/>
      },
      {
        path:'/map',
        element:<MapContainer/>
      },
      {
        path:'/Register',
        element:<Register/>
      }
    
      
    ]
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
 
export default App;
