import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function InputForm({ handleSubmit, setInput, input }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.value = "";
  }, [handleSubmit]);

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
