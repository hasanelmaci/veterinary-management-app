import {Link} from "react-router-dom"
import {useState,useContext,useEffect} from 'react'
import CustomerAuthContext from "../context/customerAuth/customerAuthContext"

function CustomerLogin(props) {

    const customerAuthContext = useContext(CustomerAuthContext);

    const {login,loadCustomer,isCustomerAuth,error,clearErrors} = customerAuthContext;
    const [isValid,setIsValid] = useState(null)

    useEffect(()=>{
        loadCustomer()
        if(isCustomerAuth){
            props.history.push("/customerprofile")
           
        }
        if(error){
            setIsValid(false)
            clearErrors()
        }
        console.log('customerloginj')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isCustomerAuth,props.history])

    const [customer,setCustomer] = useState({
        email:"",
        password:""
    })

    const {email,password} = customer;

    const onChange = (event) =>{
        setCustomer({...customer,[event.target.name]:event.target.value});
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
        {isValid === false && <p>Geçersiz kullanıcı adı veya parola.</p> }
      </div>
              </div>
    )
}

export default CustomerLogin
