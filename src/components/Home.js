import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


function Home (){
  let {user} = useContext(AuthContext)
  let {accessToken} = useContext(AuthContext)
  return (
    <>
      <h1 className="text-info">Hi from - {user && user}</h1>
      <p className="text-info">Token is:  {accessToken}</p>
    </>
  )
}


export default Home