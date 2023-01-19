import { useState, useEffect } from 'react';

import Login from '../components/Login';
import Research from '../components/Research';
import Results from '../components/Results';

import styles from './MainPath.module.css';

const MainPath = () => {

  const [token, setToken] = useState();
  const [list, setList] = useState();


  useEffect(() => {
    const storeToken = localStorage.getItem('token');

    if (storeToken)
      setToken(storeToken);

  }, [token]);

  if (!token) {
    return (
      <div className={styles.mainPath}>
        <header className={styles.mainPathHeader}>
          <Login setToken={setToken} />
        </header>
      </div>
    )
  }

  if (!list) {
    return (
      <div className={styles.mainPath}>
        <header className={styles.mainPathHeader}>
          <Research setList={setList} />
        </header>
      </div>
    );
  }

  return (
    <div className={styles.mainPath}>
      <header className={styles.mainPathHeader}>
        <Results list={list} setList={setList} />
      </header>
    </div>
  );

}

export default MainPath;
