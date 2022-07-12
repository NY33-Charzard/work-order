import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar.js';
import Orders from './Orders.js';
import TicketColumn from './ticketColumn';
import Test from './Test';
const App = (props) => {
  return (<>
    <Router>
     <Navbar/>
     <Routes>
      <Route path = "/">
        Open
      </Route>
     </Routes>
     <Routes>
      <Route path = "/closed">
        Closed
      </Route>
     </Routes>
    




    <Orders testingProp='Prop Pass Test.' />
    <TicketColumn />
    </Router>
  </>);
};

export default App;
