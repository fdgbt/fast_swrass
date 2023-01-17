import { useState } from 'react';

import Login from './components/login';
import Research from './components/research';

import './App.css';

const App = () => {

  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className="App">
        <header className="App-header">
          <Login setToken={setToken} />
        </header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Research />
      </header>
    </div>
  );
}

export default App;
