import { Link } from "react-router-dom";

function CustomerSettings({ customer }) {
    return (
        <div>
            <Link to={`/customers/${customer._id}/update`}>Güncelle</Link>
        </div>
    );
}

export default CustomerSettings;
