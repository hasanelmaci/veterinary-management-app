import { Link } from "react-router-dom";
import { useContext,useState } from "react";
import CustomerContext from "../../context/customer/customerContext";

function CustomerItem({ infos }) {
    const { deleteCustomer, updateCustomer } = useContext(CustomerContext);

    const [customerUpdateInfos, setCustomerUpdateInfos] = useState({
        username:"" ,
        email:"" ,
        password: "",
    });

    const {username, email, password} = customerUpdateInfos;
    const handleUpdate = (e) =>{
        e.preventDefault()
        updateCustomer({...infos,...customerUpdateInfos})
    }

    const handleChange = (e) =>{
        setCustomerUpdateInfos({...customerUpdateInfos,[e.target.name]:e.target.value})
    }


    const handleDelete = (id) => {
        deleteCustomer(id);
    };
    

    return (
        <li>
            <Link to={`/customers/${infos._id}`}>
                {infos.username} - {infos.email}{" "}
            </Link>
            <button onClick={() => handleDelete(infos._id)}>Sil</button>
            <form onSubmit={(e) => handleUpdate(e)}>
            <input placeholder='isim' name='username' value={username}  onChange={handleChange}/>
            <input placeholder='email' name='email' value={email} onChange={handleChange}/>
            <input placeholder='şifre' name='password' value={password} onChange={handleChange}/>
            <button type="submit">Güncelle</button>
            </form>
        </li>
    );
}

export default CustomerItem;
