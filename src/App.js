
import React, { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";
import Product from "./Product";
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51PtA74RvEWzqMLH5YyIDoiJeJWzLvIgo7NAFf4KJ15CDgKusxtD90HLIM5nbpqxZ7F03yoYuRPnWAmFOqps6Cv4g00jYyc8hjH"
);

function App() {
  const [{},dispatch]= useStateValue();

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('THE USER IS >>> ', authUser);
        if(authUser){
          //user logged in 
          dispatch({
            type: 'SET_USER',
            user: authUser

          })
        } else {
          // the user is logged out 
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      });
  }, [])
  
  return (
      //BEM
      <Router>
        <div className="app">
          <Routes>
               <Route  path="/login" element={<div><Header/><Login/></div>}></Route>
               <Route  path="/checkout" element={<div><Header/><Checkout/></div>}></Route>
               <Route  path="/" element={<div><Header/><Home/></div>}>
               </Route>
               <Route path="/payment" element={<div><Header/>(<Elements stripe={promise}><Payment/></Elements>)</div>}>
               </Route>
               
          </Routes>
        </div>
      </Router>
  );
}

export default App;
