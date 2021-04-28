import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import PetHeader from "../components/Pet/PetHeader";
import TreatmentList from "../components/Pet/TreatmentList";
import PetContext from "../context/pet/petContext";

function PetProfile() {
    let { id, petid } = useParams();

    const { loading, fetchOnePet, pet } = useContext(PetContext);

    useEffect(() => {
        fetchOnePet(id, petid);
        console.log('fetchonepet')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    return (
        <>
            {loading === petid ? (
                <div className="pet-profile">
                    <div className="pet-profile-infos">
                        <PetHeader pet={pet} />
                        <Link to={`/customers/${pet.owner}/${pet._id}/updatepet`}>Bilgileri güncelle</Link>
                    </div>
                    <TreatmentList pet={pet} />
                </div>
            ) :  <div className='spinner'>
            <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0} //3 secs
            />
            </div>}
        </>
    );
}

export default PetProfile;
