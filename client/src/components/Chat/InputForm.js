import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function InputForm({ handleSubmit, setInput, input }) {
  let { id } = useParams();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.value = "";
    setInput("");
  }, [id]);

  return (
    <div className="chat-input">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
}

export default InputForm;
