import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Orders from './Orders.js';
<<<<<<< HEAD
import TicketColumn from './ticketColumn.jsx';
=======
import TicketColumn, { refreshTickets } from './ticketColumn';
>>>>>>> dev
import Test from './Test';
import Refresh from './Refresh';
import Closed from './Closed.js';

const App = (props) => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<TicketColumn />}>
          {/* <Orders testingProp='Prop Pass Test.' /> */}
        </Route>
      </Routes>

      <Routes >
        <Route path="/closed" element={<Closed />}>
        </Route>
      </Routes>

    </Router >
  );
};

export default App;
