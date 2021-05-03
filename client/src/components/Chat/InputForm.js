function InputForm({ handleSubmit, setInput, input }) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default InputForm;
