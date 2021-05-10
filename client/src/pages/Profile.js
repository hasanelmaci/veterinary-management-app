import { useState, useContext, useEffect } from "react";
import PetContext from "../context/pet/petContext";
import Customers from "../components/Profile/Customers";
import SearchBar from "../components/Profile/SearchBar";

const Profile = () => {
  const { clearPetList } = useContext(PetContext);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    clearPetList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="profile">
      <div className="profile-top">
        <h1>Müşteriler</h1>
        <SearchBar search={search} />
      </div>
      <Customers searchInput={searchInput} />
    </div>
  );
};

export default Profile;
