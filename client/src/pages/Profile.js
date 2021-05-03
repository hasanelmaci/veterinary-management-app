import { useState } from "react";
import Customers from "../components/Profile/Customers";
import SearchBar from "../components/Profile/SearchBar";

const Profile = () => {
  const [searchInput, setSearchInput] = useState("");

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
