import { Link } from "react-router-dom";

function PetCard({ pet }) {
    return (
        <div className="pet-card">
            <Link to={`/customers/${pet.owner}/${pet._id}`}>
                <div className="pet-avatar-container">
                    <img src={pet.avatarPath} alt="avatar" />
                </div>
                <div className="pet-card-info-bottom">
                    <p>{pet.name}</p>
                    <p>
                        <span>{pet.type}</span>
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default PetCard;
