import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from '../Checkout/Checkout';
import { auth } from "../../firebase/firebase";
import { useStateValue } from "../../StateProvider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS ", authUser);
      if (authUser) { //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {  //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        {/* switch renders first route that matches location rather thn rendering ALL routes */}
        <Switch>
          {/* will go to login page */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* will directly go to main page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
