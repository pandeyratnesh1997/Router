
import './App.css';
import {useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import {Routes,Route, useNavigate} from 'react-router-dom'


import SignIn from './Components/Navbar/SignIn';
import SignUp from './Components/Navbar/SignUp';
import Google from './Components/Navbar/Google';

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/home");
  },[])

  return (
    
      <div className="App">
      <Navbar/>
      <Routes>
        {/* Note: in below lines we are telling browser that when url has 'home' show this <Home> element
        This 'home' comming in url from <Link> tag we used in Navbar.jsx    */}

      {/* <Route path='/' element={<Home/>}/> // this is another way to give default page without navigate. */}
       <Route path='home' element={<Home/>}/>   
       <Route path='login/*'element={<Login/>}>
        {/* // "/*" means all the routes that are after login will go here. */}
               <Route path='sign-IN' element={ <SignIn/>}/>
               <Route path='sign-in-google' element={ <Google/>}/>
                <Route path='sign-up' element={ <SignUp/> }/>
      </Route>
       <Route path='about' element={<About/>}/> 
        
      </Routes>
      

    </div>
 
   
      
    
  );
}

export default App;
