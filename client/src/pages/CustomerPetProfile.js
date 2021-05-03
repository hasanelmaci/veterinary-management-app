import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import PetHeader from "../components/Pet/PetHeader";
import TreatmentList from "../components/CustomerProfile/TreatmentList";
import UploadAvatar from "../components/CustomerProfile/UploadAvatar";

function CustomerPetProfile() {
  let { id } = useParams();
  const { fetchOnePet, pet, loading, isFetched, logout } = useContext(CustomerAuthContext);

  useEffect(() => {
    if (isFetched !== id) {
      fetchOnePet(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, isFetched]);

  return (
    <>
      {isFetched === id ? (
        <div className="pet-profile">
          <div className="pet-profile-infos">
            <di className="tocustomer-container"></di>
            <PetHeader pet={pet} />
            <UploadAvatar pet={pet} />
            <Link id="tocustomerprofile" to="/customerprofile">
              Diğer evcil hayvanlarım
            </Link>
            <br />
            <Link id="#" onClick={logout}>
              Çıkış Yap
            </Link>
          </div>
          <TreatmentList pet={pet} />
        </div>
      ) : null}
    </>
  );
}

export default CustomerPetProfile;
