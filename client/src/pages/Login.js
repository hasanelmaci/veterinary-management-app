import {useState, useContext, useEffect} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"

const Login = (props) => {

    const userAuthContext = useContext(UserAuthContext)

    const {login,isUserAuth} = userAuthContext

    useEffect(()=>{
        if(isUserAuth){
            props.history.push("/profile")
        }
    },[isUserAuth,props.history])

    const [user,setUser] =useState({
        email:"",
        password:"",
    })

    const {email, password} = user;

    const onChange = (event) =>{
        setUser({...user,[event.target.name]: event.target.value})
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        login({
            email,
            password
        })
    }

    return (
        <div>
        <h1>
          <span>Login</span> Account
        </h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" value={email} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="Login"
           
          />
        </form>
      </div>
    )
}

export default Login
