import { Link } from "react-router-dom";

function CustomerHeader({ customer, isAuthUser }) {
  return (
    <div className="customer-header">
      <div className="customer-title">
        <h1>
          <Link to={isAuthUser ? `/chat/${customer._id}` : `/customerprofile`}>{customer.username}</Link>
        </h1>
        <h3>{customer.email}</h3>
      </div>
    </div>
  );
}

export default CustomerHeader;
