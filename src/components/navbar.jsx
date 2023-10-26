import { Link } from "react-router-dom"
import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'; // Assuming you're using Firebase v9 (modular SDK)
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'


export const NavBar=()=>{
    const navigate=useNavigate();
    const[user]=useAuthState(auth);
    const signUserOut=async()=>{
        await signOut(auth);
        navigate('/n');
    }
    return(
      <div className="navbar">   
            
                <div className="links">
            <Link to="/">Home</Link>
          { !user ? <Link to="/login">Login</Link> :<Link to='/createpost'>Create Post</Link> }
           

            </div>
       
       <div className="user"> 
           {user &&( 
           <>
           <p>{user?.displayName} </p>
            {/* <img src={user?.photoURL || ""} width="30" height="30"/> */}
            <button onClick={signUserOut}>Logout</button>
            </>)}
      </div>
      </div>

       
    );
}
