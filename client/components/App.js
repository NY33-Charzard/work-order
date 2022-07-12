import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar.js';
import Orders from './Orders.js';
import TicketColumn from './ticketColumn';
import Test from './Test';
import Closed from './Closed.js';

const App = (props) => {
  return (
    <Router>
     <Navbar/>

     <Routes>
      <Route path = "/" element={<TicketColumn />}>
        {/* <Orders testingProp='Prop Pass Test.' /> */}
      </Route>
     </Routes>

     <Routes>
      <Route path = "/closed" element={<Closed />}>
      </Route>
     </Routes>

    </Router>
    );
};

export default App;
