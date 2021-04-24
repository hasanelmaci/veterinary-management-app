import {Link} from "react-router-dom"
import {useState, useContext, useEffect} from 'react'
import UserAuthContext from "../../context/userAuth/userAuthContext"

const LoginForm = (props) => {

    const userAuthContext = useContext(UserAuthContext)

    const {login,isUserAuth,loadUser,error, clearErrors} = userAuthContext
    const [isValid, setIsValid] = useState(null)

    useEffect(()=>{
      loadUser()
        if(isUserAuth){
            props.history.push("/profile")
        }
        if(error){
          setIsValid(false)
          clearErrors()
      }
    },[isUserAuth,props.history,error])

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
      <div className='login-container'>
        <div className='login'>
        <h1>
          Giriş Yap
        </h1>
        
        <form onSubmit={onSubmit}>
          <div>

            <input type="email" name="email" value={email} placeholder='E-mail' onChange={onChange} />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder='Parola'
              onChange={onChange}
              />
          </div>
          <div className='login__bottom'>

          <button>Giriş Yap</button>
          <Link to='/register' >Kayıt ol</Link>
          </div>
        </form>
        {isValid == false && <p>Geçersiz kullanıcı adı veya parola.</p> }
      </div>
              </div>
    )
}

export default LoginForm
