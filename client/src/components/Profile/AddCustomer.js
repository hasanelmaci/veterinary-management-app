import {useContext,useState} from 'react'
import CustomerContext from '../../context/customer/customerContext';

function AddCustomer() {
    const {addCustomer} = useContext(CustomerContext);

    const [customer, setCustomer] = useState({
        username:"",
        email:"",
        password:"",
    });

    const {username,email,password} = customer;

    const handleOnChange = (event)=>{
        setCustomer({...customer, [event.target.name]:event.target.value})
    }
    
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        addCustomer({username,email,password})
    }

    return (
        <div className='add-customer'>
            <form onSubmit={handleOnSubmit}>
            <input placeholder='isim' name='username' value={username} onChange={handleOnChange}/>
            <input placeholder='email' name='email' value={email} onChange={handleOnChange}/>
            <input placeholder='şifre' name='password' value={password} onChange={handleOnChange}/>
            <button type='submit'>Ekle</button>
            </form>
        </div>
    )
}

export default AddCustomer
