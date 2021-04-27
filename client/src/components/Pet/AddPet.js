import { useContext, useState } from "react";
import { useParams,Link } from "react-router-dom";
import PetContext from "../../context/pet/petContext";

function AddPet() {
    const { addPet } = useContext(PetContext);

    const [pet, setPet] = useState({});
    const [message, setMessage] = useState(false)

    let { id } = useParams();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addPet(id, pet);
        setMessage(true)
    };

    const handleOnChange = (e) => {
        const inputObject = { [e.target.name]: e.target.value };
        setPet({ ...pet, ...inputObject });
    };

    return (
        <div className="addpet-container">
            <div className="addpet">
                <h1>Evcil Hayvan Ekle</h1>
                <form onSubmit={handleOnSubmit}>
                    <input placeholder="İsim" name="name" onChange={handleOnChange} />
                    <input placeholder="Tür" name="animal" onChange={handleOnChange} />
                    <input placeholder="Cins" name="type" onChange={handleOnChange} />
                    <input placeholder="Cinsiyet" name="gender" onChange={handleOnChange} />
                    <button type="submit">Ekle</button>
                </form>
                {message && (
                    <p>
                        Yeni evcil hayvan eklendi.{" "}
                        <Link to={`/customers/${id}`} onClick={()=>setMessage(false)}>
                            {" "}
                            Profile dön.
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default AddPet;
