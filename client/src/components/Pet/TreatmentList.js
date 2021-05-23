import UpcomingTreatments from "./UpcomingTreatments";
import PastTreatments from "./PastTreatments";
import AddTreatment from "./AddTreatment";

function TreatmentList({ pet }) {
  return (
    <div className="treatment-container">
      <div className="treatment-header "></div>
      <h2>Future Treatments</h2>
      <AddTreatment treatmentType="upcoming" pet={pet} />
      <table className="treatment-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Medicine</th>
            <th>Number</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {pet.upcomingtreatments.length === 0 ? (
            <td>Treatment is not found.</td>
          ) : (
            pet.upcomingtreatments.map((item) => (
              <UpcomingTreatments key={item._id} upcomingtreatments={item} pet={pet} />
            ))
          )}
        </tbody>
      </table>
      <h2>Past Treatments</h2>
      <AddTreatment treatmentType="past" pet={pet} />
      <table className="treatment-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Medicine</th>
            <th>Number</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {pet.pasttreatments.length === 0 ? (
            <td>Treatment is not found.</td>
          ) : (
            pet.pasttreatments.map((item) => <PastTreatments key={item._id} pasttreatments={item} pet={pet} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TreatmentList;
