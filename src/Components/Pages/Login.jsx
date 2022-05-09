import React from 'react'
// import SignIn from '../Navbar/SignIn'
// import SignUp from '../Navbar/SignUp'
// import Google from '../Navbar/Google'
import { useNavigate, Outlet} from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  
    return (
    
    
    <h2>
        <button onClick={()=> navigate("sign-IN")}>Sign-In</button>
        <button onClick={()=> navigate("sign-up")}>Sign-Up</button>
        <button onClick={()=> navigate("sign-in-google")}>Login with Google</button>
        <div>
            {/* <Routes>
               <Route path='sign-IN' element={ <SignIn/>}/>
               <Route path='sign-up' element={ <SignUp/> }/>
               <Route path='sign-in-google' element={ <Google/>}/>
               
                // We can remove all three Route from here and place Inside Login Route in App.js file.
                then we also have to remove import these from here.
                // we can add this sign-In , Google content in a perticular position marked
                as <Outlet/>.
                if <Outlet /> possition is top of page then these sign-In, Google etc will show on top of webPage.


             </Routes> */}
             
            
        </div>
        <Outlet/>
    </h2>
  )
}

export default Login