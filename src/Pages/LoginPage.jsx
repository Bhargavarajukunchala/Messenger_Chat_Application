import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login=()=>{
    
    // const [err, seterr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const successToast = toast.success("Successfully logged in", {
          position: "top-center",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          onClose: () => {
            navigate("/");
          }
        });
        navigate("/");
      } catch (err) {
        toast.error("Please provide valid credentials", {
          position: "top-center",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
        });
      }
    };

    return (
        <div className="formContainer">
            <ToastContainer/>
            <div className="fromWrapper">
                <span className="logo">Messenger Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit} >
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>

                 </form>
                 <p>You don't have an account?<Link to="/register">Register</Link> </p>
                 <h4>Default Login Details </h4>
                 <h5>Email : bhargavaraju@gmail.com</h5>
                 <h5>Password : 123456</h5>
             </div>
             
          </div>
    )
}

export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { auth } from "../Firebase";


// const Login = () => {
//     const navigate = useNavigate();
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const email = e.target[0].value;
//       const password = e.target[1].value;
  
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         toast.success("Successfully logged in", { position: "top-center" });
//         navigate("/");
//       } catch (err) {
//         toast.error("Please provide valid credentials", { position: "top-center" });
//       }
//     };
  
//     return (
//       <div className="formContainer">
//         <ToastContainer />
//         <div className="formWrapper">
//           <span className="logo">Messenger Chat</span>
//           <span className="title">Login</span>
//           <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button>Sign in</button>
//           </form>
//           <p>
//             You don't have an account? <Link to="/register">Register</Link>
//           </p>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;
  

