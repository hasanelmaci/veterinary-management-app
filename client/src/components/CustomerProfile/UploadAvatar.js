import {useContext,useState} from "react";
import CustomerAuthContext from '../../context/customerAuth/customerAuthContext'

function UploadAvatar({ pet }) {

    const {uploadAvatar} = useContext(CustomerAuthContext)

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);


    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        
		setIsFilePicked(true);
	};

	const handleSubmission = (e) => {
        e.preventDefault()
        let formData = new FormData();
		formData.append('avatar', selectedFile);
        uploadAvatar(pet._id,formData)
	};
    return (



        <div>
        <input type="file" name="avatar" onChange={changeHandler} />
        <div>
            <button onClick={handleSubmission}>Submit</button>
        </div>
    </div>
       
    );
}

export default UploadAvatar;
