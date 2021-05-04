import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function InputForm({ handleSubmit, setInput, input }) {
  return (
    <div className='chat-input'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button><FontAwesomeIcon icon={faPaperPlane} /></button>
      </form>
    </div>
  );
}

export default InputForm;
