function CustomerHeader({ customer }) {
    return (
        <div className="customer-header">
            <div className="customer-title">
                <h1>{customer.username}</h1>
                <h3>{customer.email}</h3>
            </div>
        </div>
    );
}

export default CustomerHeader;
