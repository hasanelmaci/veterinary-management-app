import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CustomerAuthContext from "../../context/customerAuth/customerAuthContext";

function UploadAvatar({ pet }) {
    const { uploadAvatar } = useContext(CustomerAuthContext);

    const [selectedFile, setSelectedFile] = useState();
    const [checkFile, setCheckFile] = useState(false);

    const changeHandler = (event) => {
        if (event.target.files[0]) setCheckFile(true);
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("avatar", selectedFile);
        uploadAvatar(pet._id, formData);
    };
    return (
        <div className="upload-avatar">
            <label className="avatar-input" for="file-upload">
                {selectedFile ? selectedFile.name : "Resim seç"}
                <input id="file-upload" className="btn" type="file" name="avatar" onChange={changeHandler} />
            </label>
            {checkFile ? (
                <button id="avatar-ok-button" onClick={handleSubmission}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            ) : null}
        </div>
    );
}

export default UploadAvatar;
