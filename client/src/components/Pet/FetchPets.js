import { useContext, useEffect } from "react";
import PetContext from "../../context/pet/petContext";
import PetList from "./PetList";

function FetchPets({ customer }) {
  const { fetchPets, petList } = useContext(PetContext);
  useEffect(() => {
    fetchPets(customer._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <PetList petList={petList} />
    </div>
  );
}

export default FetchPets;
