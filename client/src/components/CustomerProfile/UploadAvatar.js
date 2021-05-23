import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CustomerAuthContext from "../../context/customerAuth/customerAuthContext";

function UploadAvatar({ pet }) {
  const { uploadAvatar, error, clearErrors } = useContext(CustomerAuthContext);

  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const [avatarError, setAvatarError] = useState(null);

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

  useEffect(() => {
    if (error?.data === "Please upload a image under 200KB") {
      console.log(error);
      setAvatarError("Please upload an image under 200KB.");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadAvatar]);
  return (
    <div className="upload-avatar">
      <label className="avatar-input" htmlFor="file-upload">
        {selectedFile ? selectedFile.name : "Upload"}
        <input id="file-upload" className="btn" type="file" name="avatar" onChange={changeHandler} />
      </label>
      {checkFile ? (
        <button id="avatar-ok-button" onClick={handleSubmission}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : null}
      <p>{avatarError}</p>
    </div>
  );
}

export default UploadAvatar;
