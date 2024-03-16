import React from 'react'
import img from '../../assites/a1c7dc5b68a42239311e510f54d8cd59.jpeg'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function SignUp() {

  
  return <>
  
<div className="container-fluid py-5">
  <div className="row">
    <div className="col-md-7">
      <img className='w-100' src={img} alt="" />
    </div>
    <div className="col-md-4 py-5 px-5">
      <div className='px-5'>
        <h2 >Create an account</h2>
        <h3 className='fs-6'>Enter your details below</h3>
        <form action="" >
          
          <input className='form-control form border-bottom border-2 border-dark my-4' type="text" name="name" id="name" placeholder="Name" />
          <input className='form-control form border-bottom border-2 border-dark my-4' type="email" name="Email" id="Email" placeholder="Email" />
          <input className='form-control form border-bottom border-2 border-dark my-4' type="password" name="password" id="password" placeholder="Password" />
        
        <button className='btn btn-danger m-auto d-block w-100 my-3'>Create Account</button>
        <button className='btn border border-black border-1 m-auto w-100 d-block'><FcGoogle className='fs-4'/> Sign up with Google</button>
        <p className='w-100 text-center my-3'>Already have account?<Link to="/signin"><button className='btn px-2 py-2'>log In</button></Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
  
  </>
}
