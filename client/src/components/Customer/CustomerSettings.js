import { Link } from "react-router-dom";

function CustomerSettings({ customer }) {
  return (
    <div className="customer-settings">
      <Link to={`/customers/${customer._id}/update`}>Güncelle</Link>
      <Link to={`/customers/${customer._id}/addpet`}>Evcil hayvan ekle</Link>
    </div>
  );
}

export default CustomerSettings;
