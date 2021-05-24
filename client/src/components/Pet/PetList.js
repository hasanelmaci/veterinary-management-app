import PetCard from "./PetCard";

function PetList({ petList }) {
  return (
    <div className="pet-list-container">
      <h2>Pets</h2>
      <div className="pet-list">
        {petList.length === 0 ? (
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>Pet is not found.</h1>
        ) : (
          petList.map((pet) => <PetCard key={pet._id} pet={pet} />)
        )}
      </div>
    </div>
  );
}

export default PetList;
