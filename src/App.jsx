import { useAuthContext } from '@asgardeo/auth-react';
import './App.css';

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <div className="App">
      {state.isAuthenticated ? (
        <>
          <button onClick={() => signOut()}>Logout</button>
          <p>Welcome, {state.username}</p>
        </>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </div>
  );
}

export default App;
