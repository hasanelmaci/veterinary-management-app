import paw from "../../styles/img/paw.jpg";

function PetHeader({ pet }) {
    const addDefaultSrc = (ev) => {
        ev.target.onError = null;
        ev.target.src = paw;
    };

    return (
        <div className="pet-header">
            <div className="pet-avatar">
                <img src={`/pets/${pet._id}/avatar`} onError={addDefaultSrc} alt="avatar" />
            </div>
            <div className="pet-profile-infos">
                <h1>{pet.name}</h1>
                <p>
                    {pet.animal} {pet.type}
                </p>
                <p>
                    {pet.gender} {pet.birthdate}
                </p>
            </div>
        </div>
    );
}

export default PetHeader;
