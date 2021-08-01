import { Link } from "react-router-dom";

function CustomerItem({ infos }) {
  return (
    <>
      <tr>
        <td>
          <Link className="customerlist__link" to={`/customers/${infos._id}`}>
            {infos.username}
          </Link>
        </td>

        <td>
          <Link className="customerlist__link" to={`/customers/${infos._id}`}>
            {infos.email}
          </Link>
        </td>
      </tr>
    </>
  );
}

export default CustomerItem;
