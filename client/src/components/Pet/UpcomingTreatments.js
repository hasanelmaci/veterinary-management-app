import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import PetContext from "../../context/pet/petContext";

function UpcomingTreatments({ upcomingtreatments, pet }) {
  const { deleteUpcomingTreatment } = useContext(PetContext);

  const handleDelete = () => {
    deleteUpcomingTreatment(pet._id, upcomingtreatments._id);
  };
  return (
    <>
      <tr>
        <td>{upcomingtreatments.type}</td>
        <td>{upcomingtreatments.medicine}</td>
        <td>{upcomingtreatments.number}</td>
        <td>{upcomingtreatments.date}</td>
        <td>
          <button onClick={() => handleDelete()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </td>
      </tr>
    </>
  );
}

export default UpcomingTreatments;
