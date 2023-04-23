import './register.css';
import React,{ useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const RegisterStudent = ()=>{
  const navigate = useNavigate();
  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNum, setPhonenum] = useState("")
  const [password, setPassword] = useState("")
  const [subjet, setSubject] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null){
        navigate("/home-ppage");
    }
},[])

const registerAction = (e) => {
  e.preventDefault();
  setIsSubmitting(true)
  let payload = {
      Fname:Fname,
      Lname:Lname,
      dob:dob,
      phoneNum:phoneNum,
      gender:gender,
      subjet:subjet,
      email:email,
      password:password,
      password_confirmation:confirmPassword
  }
  axios.post('/api/register', payload)
  .then((r) => {
      setIsSubmitting(false)
      localStorage.setItem('token', r.data.token)
      navigate("/dashboard");
  })
  .catch((e) => {
      setIsSubmitting(false)
      if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
      }
  });
}
  return(
<div className='background'>
<div class="wrapper rounded bg-white ">

      <div class="h3">Registration Form</div>

      <form class="form" onSubmit={(e)=>registerAction(e)} >
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <label>First Name</label>
            <input type="text" class="form-control" required value={Fname}/>
          </div>
          <div class="col-md-6 mt-md-0 mt-3">
            <label>Last Name</label>
            <input type="text" class="form-control" required value={Lname}/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <label>Birthday</label>
            <input type="date" class="form-control" required value={dob}/>
          </div>
          {/* <div class="col-md-6 mt-md-0 mt-3">
            <label>Gender</label>
            <div class="d-flex align-items-center mt-2">
              <label class="option">
                <input type="radio" name="radio"/>Male
                  <span class="checkmark"></span>
              </label>
              <label class="option ms-4">
                <input type="radio" name="radio"/>Female
                  <span class="checkmark"></span>
              </label>
            </div>
          </div> */}
        </div>
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <label>Email</label>
            <input type="email" class="form-control" required name='email' value={email}/>
          </div>
          <div class="col-md-6 mt-md-0 mt-3">
            <label>Phone Number</label>
            <input type="tel" class="form-control" required name='phoneNum' value={phoneNum}/>
          </div>
        </div>
        {/* <div class=" my-md-2 my-3">
          <label>Subject</label>
          <select id="sub" required>
            <option value="" selected hidden>Choose Option</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="Social">Social</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div> */}
        <button disabled={isSubmitting} type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>

    </div>
</div>
      
  )
}
export default RegisterStudent;