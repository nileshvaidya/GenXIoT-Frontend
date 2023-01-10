import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { actionTypes, useStateValue } from '../../store';
import styles from '../../style'

const Logout = () => {
  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const history = useNavigate();
  const logout = () => {
    removeCookie('jwt');
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
   
    history("/");
  }
  return (
    
    <div>
       <button type ="button" className={`py-4 px-8 bg-blue-gradient font-poppins font-medium text-[14px] text-primary outline-none ${styles} rounded-[10px]`} onClick={logout}>
      LogOut
    </button>
    </div>
  )
}

export default Logout
