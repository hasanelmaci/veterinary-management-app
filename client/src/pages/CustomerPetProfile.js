import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import PetHeader from "../components/Pet/PetHeader";
import TreatmentList from "../components/CustomerProfile/TreatmentList";
import UploadAvatar from "../components/CustomerProfile/UploadAvatar";

function CustomerPetProfile() {
    let { id } = useParams();
    const { fetchOnePet, pet, loading, isFetched } = useContext(CustomerAuthContext);

    useEffect(() => {
        if (isFetched !== id) {
            fetchOnePet(id);
        }
    }, [loading, isFetched]);

    return (
        <>
            {isFetched === id ? (
                <div>
                    <PetHeader pet={pet} />
                    <UploadAvatar pet={pet} />
                    <TreatmentList pet={pet} />
                </div>
            ) : null}
        </>
    );
}

export default CustomerPetProfile;
