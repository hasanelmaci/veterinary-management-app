function UpcomingTreatments({ upcomingtreatments }) {
  return (
    <>
      <tr>
        <td>{upcomingtreatments.type}</td>
        <td>{upcomingtreatments.medicine}</td>
        <td>{upcomingtreatments.number}</td>
        <td>{upcomingtreatments.date}</td>
      </tr>
    </>
  );
}

export default UpcomingTreatments;
