import fakeTicketGenerator from '../lib/fakeTicketGenerator';
import Tickets from './Tickets';
import React, { Component, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const buildTickets = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(Tickets(arr[i]));
  }
  return output;
}
const status = {
  cust: false,
  subject: false,
  status: false,
  priority: false,
  due: false,
  created: false,
}
function TicketColumn() {
  const [ticketComponents, setTicketsComponents] = useState([]);
  const [tickets, setTickets] = useState([]);
  const ticketReports = [];
  const sortColumbBy = (key) => {
    if (status[key]) {
      const sortAlphabetically = tickets.slice().sort((a, b) => a[key].localeCompare(b[key]))
      setTicketsComponents(buildTickets(sortAlphabetically));
      status[key] = false;
    } else {
      const sortAlphabetically = tickets.slice().sort((a, b) => b[key].localeCompare(a[key]))
      setTicketsComponents(buildTickets(sortAlphabetically));
      status[key] = true;
    }
  }
  const refreshTickets = () => {// Function will set tickets state and generate random tickets
    for (let i = 0; i < 200; i++) {
      ticketReports.push(fakeTicketGenerator());
    }
    setTickets(ticketReports);
    const ticketComponentArr = [];
    for (let i = 0; i < ticketReports.length; i++) {
      ticketComponentArr.push(Tickets(ticketReports[i]));
    }
    setTicketsComponents(ticketComponentArr);
  }

  return (<>
    <div className="wrapper">
      <nav className="flex-nav">
        <div className='ticketHeader'>
          <div key={uuidv4()} id='ticketCategor' className='type' onClick={() => { sortColumbBy('type') }}>Cust</div>
          <div key={uuidv4()} id='ticketCategor' className='subject' onClick={() => { sortColumbBy('subject') }}> Subject</div>
          <div key={uuidv4()} id='ticketCategor' className='status' onClick={() => { sortColumbBy('status') }}> Status </div>
          <div key={uuidv4()} id='ticketCategor' className='priority' onClick={() => { sortColumbBy('priority') }}> Priority </div>
          <div key={uuidv4()} id='ticketCategor' className='due' onClick={() => { sortColumbBy('due') }}> Due</div>
          <div key={uuidv4()} id='ticketCategor' className='created' onClick={() => { sortColumbBy('created') }}> Created</div>
        </div>
        <ul>
          {ticketComponents}
        </ul>
      </nav>
    </div>
    <div className="gradient-border" id="box">
    </div>
    <button onClick={refreshTickets}>Refresh</button>
  </>)
}
export default TicketColumn;

