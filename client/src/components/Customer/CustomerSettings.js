import { Link } from "react-router-dom";

function CustomerSettings({ customer }) {
  return (
    <div className="customer-settings">
      <Link to={`/customers/${customer._id}/update`}>Edit</Link>
      <Link to={`/customers/${customer._id}/addpet`}>Add new pet</Link>
    </div>
  );
}

export default CustomerSettings;
