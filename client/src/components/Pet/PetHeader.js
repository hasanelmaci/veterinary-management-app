import { memo } from "react";
import reformatDate from "../../utils/reformatDate";
function PetHeader({ pet }) {
  return (
    <div className="pet-header">
      <div className="pet-avatar">
        <img src={pet.avatarPath} alt="avatar" />
      </div>
      <div className="pet-profile-infos">
        <h1>{pet.name}</h1>
        <p>
          <span>Type:</span> {pet.type}
        </p>
        <p>
          <span>Gender:</span> {pet.gender}
        </p>
        <p>
          <span>Birthdate:</span> {reformatDate(pet.birthdate)}
        </p>
      </div>
    </div>
  );
}

export default memo(PetHeader);
