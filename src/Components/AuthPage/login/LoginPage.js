import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./Login.css"
import LandingBase from "../../../Base/LBase/LandingBase";
import { fetchUsers } from "../../../Base/redux/users/usersAction";
import {useDispatch} from "react-redux"
import { fetchCart } from "../../../Base/redux/Cart/cartAction";

const emailValidation = yup.object({
  email: yup.string().required("Enter an Email"),
  password: yup.string().required("Enter Password").min(8,"Enter Minimum Eight Characters"),
});

const LogInPage = () => {
  const [user,setUser]=useState()
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const[loader,setLoader]=useState(false)
  const history = useHistory();
  const dispatch=useDispatch()

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: emailValidation,
      onSubmit: (user) => {
        logInFunc(user);
      },
    });
    const logInFunc = async (user) => {
      try {
        const response = await fetch("https://shine-traders-back-end.vercel.app/userLogin", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        if (data.message === "User logged in successfully") {
          setUser(data.user)
          dispatch(fetchUsers(data.user))
         
          localStorage.setItem("email",data.user.email);
          localStorage.setItem("name",data.user.firstName);
          localStorage.setItem("token",data.token);
          history.push("/main");
        } else if(data.message === "invalid credentials password"){
          setShowPassword(true);
          setLoader(false)
        } else if(data.message === "invalid credentials email"){
          setShowEmail(true);
          setLoader(false)
        }
      } catch (error) {
        console.log("User LogIn Error : ", error);
      
      }
  
    };

    const setLoaderFunction =()=>{
      if(!values.email ||
        !values.password || (errors.password && touched.password)){
       return setLoader(false)
      }
      else{
        return setLoader(true)
      };
    }
  
  return (
    <LandingBase>
    <div className="loginPage">
      
      <div className="login-main">

     
      <div className="main-logo">
       
        <div>
          <h3 className="title-login-user">
          Shine Traders Welcomes You
           
          </h3>
        </div>
       
      </div>

      <div>
        <div>
        <h2 className="signIn-title">LogIn As Family</h2>
          <form onSubmit={handleSubmit} className="form-signIn">
          <div><span>UserId : user123@gmail.com</span> || 
            
            <span>password : user12345</span></div>

          <div className="input-div">
                <label className="textlabel-signIn" for="email"
                >Email <span style={{color:"brown"}}>*</span></label>
              <input
                className="input-login-user"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              ></input>
            </div>
            {errors.email && touched.email ? (
              <h6 style={{ color: "red" }}>{errors.email}</h6>
            ) : (
              ""
            )}

              <div className="input-div">
                <label className="textlabel-signIn" for="password">Password <span style={{color:"brown"}}>*</span></label>
              <input
                placeholder="Password"
                className="input-login-user"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></input>
            </div>
            {errors.password && touched.password ? (
              <h6 style={{ color: "red" }}>{errors.password}</h6>
            ) : (
              ""
            )}
            {showEmail?(
              <h6 style={{ color: "red" }}>
                Entered Email Is not available, please Signup before login
              </h6>
            ) : (
              ""
            )}
            {showPassword ? (
              <h6 style={{ color: "red" }}>
                Password is incorrect
              </h6>
            ) : (
              ""
            )}

            <div className="flex-container">
              <div className="w-100 m-1">
               
            <p
            className="forget-password-login-user"
            onClick={() => history.push("/forgetPassword/user")}
            
          >
            Forget Password
          </p>
              </div>
              <div className="w-100 m-1">
                <button type="" className="login-btn-land"
                onClick={()=>setLoaderFunction()}
                >
                  {loader?<Spinner animation="border" variant="secondary" size="md" />:"Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
        
        </div>
        
  
        
      </div>
      </div>
    
    </div>
    </LandingBase>
    
  );
};

export default LogInPage;
