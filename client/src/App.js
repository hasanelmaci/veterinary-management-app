import './App.css';
import UserAuthState from './context/UserAuth/UserAuthState'
import Register  from './components/Register';

function App() {
  return (
    <div className="App">
      <UserAuthState>
    <Register/>
      </UserAuthState>
    </div>
  );
}

export default App;
