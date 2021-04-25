function PetHeader({ pet }) {
    return (
        <div className="pet-header">
            <div className="pet-avatar">
                <img src={pet.avatarPath} alt="avatar" />
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
