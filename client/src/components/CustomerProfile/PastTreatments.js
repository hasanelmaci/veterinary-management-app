function PastTreatments({ pasttreatments, pet }) {
  return (
    <>
      <tr>
        <td>{pasttreatments.type}</td>
        <td>{pasttreatments.medicine}</td>
        <td>{pasttreatments.number}</td>
        <td>{pasttreatments.date}</td>
      </tr>
    </>
  );
}

export default PastTreatments;
