import React, { Component } from 'react';
import Orders from './Orders.js';
import TicketColumn from './ticketColumn';
import Test from './Test';
import Refresh from './Refresh';
const App = (props) => {

  return (<>
    <Orders testingProp='Prop Pass Test.' />
    <Refresh />
    <TicketColumn />
  </>);
};

export default App;
