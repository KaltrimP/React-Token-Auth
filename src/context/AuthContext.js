import {createContext, useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children})=>{

  // localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null
  const [user,setUser] = useState(()=> localStorage.getItem('user'))
  let [accessToken,setAccessToken] = useState(()=> localStorage.getItem('accessToken'))

  let navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault();
    await axios({
      url: 'http://127.0.0.1:8000/api/auth/login/',
      method: 'post',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
      },
      data: JSON.stringify({'email': e.target.email.value, 'password':e.target.password.value })
    })
    .then(res=>{console.log(res)
    if (res.status=== 201) {
        setAccessToken(res.data['access_token'])
        setUser(res.data.user['name'])
        console.log(accessToken)
        console.log(user)
        localStorage.setItem('accessToken', res.data['access_token'])
        localStorage.setItem('user', res.data.user['name'])
        navigate('/home')
      }else{
        alert('This user is not done!')
      }
      
    })
      
  }

  let logoutUser = () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    navigate('/login')
  }

  const contextData = {
    user: user,
    accessToken: accessToken,
    loginUser:loginUser,
    logoutUser: logoutUser,
  }

  return (
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  )
}

