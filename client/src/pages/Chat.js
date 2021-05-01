import { incrementCount, countUpdated } from "../socketService";

function Chat() {
    const handleIncrement = () => {
        incrementCount();
        countUpdated();
    };

    return (
        <div>
            <button onClick={handleIncrement}>+1</button>
        </div>
    );
}

export default Chat;
