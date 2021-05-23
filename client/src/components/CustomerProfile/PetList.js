import PetCard from "./PetCard";

function PetList({ petList }) {
  return (
    <div className="pet-list-container">
      <h2>My Pets</h2>
      <div className="pet-list">
        {petList.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;
