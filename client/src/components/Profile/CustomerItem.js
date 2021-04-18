import { Link } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import UpdateCustomerPopup from './UpdateCustomerPopup'

function CustomerItem({ infos }) {
    const { deleteCustomer, updateCustomer,error,clearError } = useContext(CustomerContext);



    const handleDelete = (id) => {
        deleteCustomer(id);
    };
    
    

    return (
        <li>
            <Link to={`/customers/${infos._id}`}>
                {infos.username} - {infos.email}{" "}
            </Link>
            <button onClick={() => handleDelete(infos._id)}>Sil</button>
            <UpdateCustomerPopup infos={infos} />
        </li>
    );
}

export default CustomerItem;
