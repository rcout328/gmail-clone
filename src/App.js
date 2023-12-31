import React from 'react';
import './App.css';
import Header from './Header';
import Slidebar from './Slidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Emaillist1 from './Emailist1';
import Mail from './Mail';
import Sendmail from './Sendmail';
import { useSelector } from 'react-redux';
import { selectSendMessageOpen } from './features/mailSlice';

function App() {
  const sendMessageisOpen = useSelector(selectSendMessageOpen)
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Slidebar />
          <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>
          <Route path="/">
            <Emaillist1/>
          </Route>
        </Switch>
        </div>
       {sendMessageisOpen && <Sendmail/>} 
      </div>
    </Router>
  );
}

export default App;
