import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import About from './components/About/About';
import Teams from './components/Teams/Team';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const logedUserState = localStorage.getItem('isLogged');

    if (logedUserState === 'yes') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLogged', 'yes');
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    localStorage.removeItem('isLogged')
    setIsLoggedIn(false);

  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Switch>
        <Route path="/" exact>
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>
        </Route>
        <Route path="/home" exact>
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/team">
          <Teams/>
        </Route>
      </Switch>
    </React.Fragment>

  );
}

export default App;
