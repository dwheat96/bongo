import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import OrderHistory from './OrderHistory'

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path='/payment'>
          <Header />
          <Payment />
        </Route>

        <Route path="/orderhistory">
          <Header />  
          <OrderHistory />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>

      </Switch>
    </div>
    </Router>
  )
}

export default App
