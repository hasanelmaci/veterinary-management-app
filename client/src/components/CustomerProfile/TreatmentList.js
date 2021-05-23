import UpcomingTreatments from "./UpcomingTreatments";
import PastTreatments from "./PastTreatments";

function TreatmentList({ pet }) {
  return (
    <div className="treatment-container">
      <div className="treatment-header "></div>

      <h2>Future Treatments</h2>

      <table className="treatment-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Medicine</th>
            <th>Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {pet.upcomingtreatments?.map((item) => (
            <UpcomingTreatments key={item._id} upcomingtreatments={item} pet={pet} />
          ))}
        </tbody>
      </table>
      <h2>Past Treatments</h2>

      <table className="treatment-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Medicine</th>
            <th>Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {pet.pasttreatments?.map((item) => (
            <PastTreatments key={item._id} pasttreatments={item} pet={pet} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TreatmentList;
