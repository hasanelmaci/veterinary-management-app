import { Link } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import nocustomerpic from '../../styles/img/nocustomerpic.png'
import UpdateCustomerPopup from './UpdateCustomerPopup'

function CustomerItem({ infos }) {
    const { deleteCustomer, updateCustomer,error,clearError } = useContext(CustomerContext);



    const handleDelete = (id) => {
        deleteCustomer(id);
    };
    
    

    return (
        <>
        <tr>
            <td>
            <Link className='customerlist__link' to={`/customers/${infos._id}`}>
                <img src={nocustomerpic} className='avatar' /> {" "}
            </Link>
            </td>
            <td>
            <Link className='customerlist__link' to={`/customers/${infos._id}`}>
            {infos.username}
            </Link>
            </td>

            <td>
            <Link className='customerlist__link' to={`/customers/${infos._id}`}>
            {infos.email}
            </Link>
            </td>
            {/* <button onClick={() => handleDelete(infos._id)}>Sil</button> */}
            {/* <UpdateCustomerPopup infos={infos} /> */}

        </tr>
        </>
    );
}

export default CustomerItem;
