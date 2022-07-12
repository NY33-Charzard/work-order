import React, { Component } from 'react';
import Orders from './Orders.js';
import TicketColumn from './ticketColumn';
import Test from './Test';
const App = (props) => {
  return (<>
    <Orders testingProp='Prop Pass Test.' />
    <TicketColumn />
  </>);
};

export default App;
