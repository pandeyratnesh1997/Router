import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  
    return (
    <div style={{height:"100px",
     backgroundColor:"lightGreen",
     color: "white", 
     marginBottom: "40px",
     textAlign:"center",
     display: "flex",
     fontSize: "30px",
     justifyContent: "space-around"
    
    }}
    
    >
    <div>
        <Link to="/home">Home</Link>
        
        
        
    </div>
    <div>
        <Link to="/about">About</Link>
    </div>
    <div>
        {/* <Link to="/login">Login</Link> */}
        <button onClick={()=>{navigate("/login")}}>Login</button>
    </div>
    <div>
      
    </div>
    
    </div>
  )
}

export default Navbar