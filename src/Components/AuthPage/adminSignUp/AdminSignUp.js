import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import { useState } from "react";

import "./AdminSignUp.css"
import LandingBase from "../../../Base/LBase/LandingBase";
import Spinner from "react-bootstrap/esm/Spinner";




const signUpValidation = yup.object({
  firstName: yup.string().required("Enter Your First Name"),
  lastName: yup.string().required("Enter Your Last Name"),
  email: yup.string().required("Enter an Email"),
  phone:yup.string().required("Enter your Phone Number").min(10,"Enter Valid Phone Number"),
  password: yup.string().required("Enter Password").min(8,"Enter Minimum eight Characters"),
});

const SignUpPage = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const[loader,setLoader]=useState(false)
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        password: "",
      },
      validationSchema: signUpValidation,
      onSubmit: (user) => {
        addUser(user);
      },
    });

  const addUser = async (user) => {
    
    try {
      const response = await fetch("https://shine-traders-back-end.vercel.app/adminSignUp", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "SignedUp Successfully") {
       
        history.push("/adminLogin")
       
      } else if (data.message === "Email Already Exist") {
        setShow(true);
        setLoader(false)
      } else {
      }
    } catch (error) {
      console.log("Admin LogIn Error : ", error);
    }
  };

  const setLoaderFunction =()=>{
    if(!values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.phone ||
      !values.password){
     return setLoader(false)
    }
    else if((errors.phone && touched.phone) || (errors.password && touched.password) ){
      return setLoader(false)
    }
    else{
      return setLoader(true)
    };

   
  }
 

  return (

   <LandingBase>
    
    <div className="signUpPage">
 <div className="signUp-admin-main">
        <div className="name-title-signUp">
          <h3 className="title-signUp-admin">
          Shine Traders Welcomes You
           
          </h3>
        </div>

      <div className="Sign_up">
      
        <h1 className="signup-title-2-admin" >Admin SignUp</h1>

        <form onSubmit={handleSubmit} className="form-signup-admin">

        <div className="input-div input1">
                <label class="textlabel" for="firstName">First Name
                <span style={{color:"brown"}}>{" "}*</span></label>
                <input
              className="input-signUp-admin"
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
            ></input>
            </div>
         
          


           <div className="input-div input2">
                <label class="textlabel" htmlFor="lastName">Last Name
                <span style={{color:"brown"}}>{" "}*</span></label>
                <input
              className="input-signUp-admin"
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
            ></input>
            </div>
          <div>
            
          </div>
         { errors.firstName && touched.firstName ||errors.lastName && touched.lastName ?
         <div className="row" style={{width:"100%",position:"relative",display:"inline-block"}}>
           
            {errors.firstName && touched.firstName ? (
            <h6 
            className="form-alert-signUp"
             style={{ color: "red" ,position:"absolute",
             left:"-25%",
           }}>{errors.firstName}</h6>
          ) : (

            ""
          )}
          
          
            {errors.lastName && touched.lastName ? (
            <h6 
            className="form-alert-signUp" 
            style={{ color: "red",float:"right",position:"absolute",
         left:"25%" }}>{errors.lastName}</h6>
          ) : (
            ""
          )}
            
       

          
          </div>:""  }
         


<div className="input-div input1">
                <label class="textlabel" for="email">E.mail
                <span style={{color:"brown"}}>{" "}*</span></label>
                <input
              className="input-signUp-user"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            ></input>
            </div>
      

            <div className="input-div input2">
                <label class="textlabel" htmlFor="phone">Phone Number
                <span style={{color:"brown"}}>{" "}*</span></label>
                <input
              className="input-signUp-admin"
              placeholder="Phone Number"
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              onBlur={handleBlur}
            ></input>
            </div>
          

            { errors.email && touched.email ||errors.phone && touched.phone ?
         <div className="row" style={{width:"100%",position:"relative",display:"inline-block"}}>
         
            {errors.email && touched.email ? (
           
              <h6
              className="form-alert-signUp"
             style={{ color: "red" , float:"left",position:"absolute",
             left:"-25%",
           }}>{errors.email}</h6>
          ) : (

            ""
          )}
            
           
            {errors.phone && touched.phone ? (
            <h6 
            className="form-alert-signUp"
            style={{ color: "red",float:"right",position:"absolute",
            left:"25%" }}>{errors.phone}</h6>
          ) : (
            ""
          )}
            
       

          
          </div>:""  }

           <div className="input-div input5">
                <label class="textlabel" for="password">Password
                <span style={{color:"brown"}}>{" "}*</span></label>
            <input
              className="input-signUp-admin"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            ></input>
          </div>
          {errors.password && touched.password ? (
            <h6
            className="form-alert-signUp"
             style={{ color: "red",marginTop:"2%" }}>{errors.password}</h6>
          ) : (
            ""
          )}

          {show ? (
            <h6 style={{ color: "red" }}>
              You have Already Signedup, login to enter
            </h6>
          ) : (
            ""
          )}
        
            <div>
            <button type="submit" className="signUp-btn"
            onClick={()=>setLoaderFunction()}>
            {loader?<Spinner animation="border" variant="secondary" size="md" />:"Register"}
            </button>
          </div>
        </form>
      </div>
      <div className="foot-signUp">
          <p>
            Already have an account?{" "}
            Click Here {" "}
            <span
              onClick={() => {
                history.push("/logIn");
              }}
              className="sup-login"
            >
              Sign in !
            </span>
            {" "}for go to signIn page
          </p>
       
      </div>
      </div>
    </div>
    </LandingBase>
  );
};

export default SignUpPage;
