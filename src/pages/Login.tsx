import React, { SyntheticEvent, useState } from 'react'
import { useMutation } from 'react-query';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {login} from '../assets'
import { loginUser } from '../apiCalls';
import { actionTypes } from '../store/reducer';
import { useStateValue } from '../store/StateProvider';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
//https://www.youtube.com/watch?v=27KeYk-5vJw
// https://www.youtube.com/watch?v=ZZA96UPl_o0
interface ILoginCRedentials {
  username: string;
  password: string;
}

function Login() {
  console.log("In Login");
  const [, setCookie] = useCookies(["jwt"]);
  const [{ }, dispatch] = useStateValue();
  const history = useNavigate();
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // var pass;
  // const mutate = (value: string): Promise<void> =>
  // new Promise((resolve) => {
  //   resolve();
  // });
  const { isLoading, error, isError, mutateAsync } = useMutation(
    "login",
    loginUser,
    {
      onSuccess: (data) => {
        dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
        setCookie("jwt", data.token);
        history("/home");
      }
    }  
  )
  const submitHandler = async () => {
    //console.log("In Submit");
    
    const user_type = "Customer";
    await mutateAsync({user_type:user_type,email:email,password:password})

  };
  return (
    <>
    <div className='bg-login-page bg-no-repeat bg-cover grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>
      {/* <div className='bg-gradient-to-r from-indigo-500' > */}
        {/* <img src={login} alt="login" className='w-full h-full object-cover' /> */}
     
    
      <div className='bg-gradient-to-r from-indigo-500 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-blue-gray-700 p-8 px-8 rounded-lg'
            onSubmit={async (e: SyntheticEvent) => {
              e.preventDefault();
              const user_type = "Customer";
              await mutateAsync({user_type:user_type,email:email,password:password})
            }} 
          >
          <h2 className='text-4xl text-white dark:text-white font-bold text-center'>SIGN IN</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>User Name</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ' name="email" type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ' name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
          </div>
          <button type='submit' className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' >Sign In</button>
        </form>
      </div>
      {/* </div> */}
      </div>
      </>
  )
}


export default Login
  function dispatch(arg0: { type: any; value: any; }) {
    throw new Error('Function not implemented.');
  }

  function setCookie(arg0: string, token: any) {
    throw new Error('Function not implemented.');
  }

