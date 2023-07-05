import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import "./AdminLogin.css"
import LandingBase from "../../../Base/LBase/LandingBase";
import Spinner from "react-bootstrap/esm/Spinner";

const emailValidation = yup.object({
  email: yup.string().required("Enter an Email"),
  password: yup.string().required("Enter Password"),
});

const AdminLogInPage = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const[loader,setLoader]=useState(false)
  const history = useHistory();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: emailValidation,
      onSubmit: (email) => {
        logInFunc(email);
      },
    });

  const logInFunc = async (email) => {
    try {
      const response = await fetch("https://shine-traders-back-end.vercel.app/adminLogIn", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    
      if (data.message === "Admin logged in successfully") {
       
        console.log("data:",data)
        localStorage.setItem("email-admin",data.admin.email);
        localStorage.setItem("name-admin",data.admin.firstName);
        localStorage.setItem("token-admin",data.token);
        history.push("/adminPage");
      } else if(data.message === "invalid credentials password"){
        setShowPassword(true);
        setLoader(false)
      } else if(data.message === "invalid credentials email"){
        setShowEmail(true);
        setLoader(false)
      }
    } catch (error) {
      console.log("-Admin LogIn Error : ", error);
    }
  };

  const setLoaderFunction =()=>{
    if(!values.email ||
      !values.password){
     return setLoader(false)
    }
    else{
      return setLoader(true)
    };
  }
  return (
    <LandingBase>
     <div className="loginPage-Admin">
      
      <div className="login-main-Admin">

     
      <div className="main-logo-Admin">
       
        <div>
          <h3 className="title-login-Admin">
          Shine Traders Welcomes You
           
          </h3>
        </div>
       
      </div>

      <div>
        <div>
        <h2 className="signIn-title-Admin">LogIn As Admin</h2>
          <form onSubmit={handleSubmit} className="form-signIn-Admin">
            
            <div><span>AdminId : admin123@gmail.com</span> || 
            
            <span>password : admin123</span></div>
          <div className="input-div">
                <label className="textlabel-signIn" for="email"
                >Email <span style={{color:"brown"}}>*</span></label>
              <input
                className="input-login-Admin"
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
                className="input-login-Admin"
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
            className="forget-password-login-Admin"
            onClick={() => history.push("/forgetPassword/-Admin")}
            
          >
            Forget Password
          </p>
              </div>
              <div className="w-100 m-1">
                <button type="" className="login-btn-land"
                onClick={()=>setLoaderFunction()}>
                   {loader?<Spinner animation="border" variant="secondary" size="md" />:"Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          Click Hear to <span onClick={()=>history.push("/adminSignUp")} 
          style={{cursor:"pointer",color:" rgb(28, 190, 52)",fontWeight:"bold"}}>SignUp</span> as Admin
        </div>
        <div>
        
        </div>
        
  
        
      </div>
      </div>
    
    </div>
    </LandingBase>
    
  );
};

export default AdminLogInPage;
