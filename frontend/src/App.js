import { useState } from 'react';

import Login from './components/Login';
import Research from './components/Research';
import Results from './components/Results';

import './App.css';

const App = () => {

  const [token, setToken] = useState();
  const [list, setList] = useState();

  if (!token) {
    return (
      <div className="App">
        <header className="App-header">
          <Login setToken={setToken} />
        </header>
      </div>
    )
  }

  if (!list) {
    return (
      <div className="App">
        <header className="App-header">
          <Research setList={setList} />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Results list={list} />
      </header>
    </div>
  );

}

export default App;
