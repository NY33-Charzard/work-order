import fakeTicketGenerator from '../lib/fakeTicketGenerator';
import Tickets from './Tickets';
import React, { Component } from 'react';

export default function Bugs() {
  const ticketReports = [];
  for (let i = 0; i < 20; i++) {
    ticketReports.push(Tickets(fakeTicketGenerator()));
    // Calls Tickets which makes a new ticket compnenet from the fake info
    // from ticket generator
  }
  return (<>
    <div className="wrapper">
      <nav className="flex-nav">
        <div className='ticketHeader'>
          <div id='ticketCategor' className='type'>Cust</div>
          <div id='ticketCategor' className='subject'> Subject</div>
          <div id='ticketCategor' className='status'> Status </div>
          <div id='ticketCategor' className='priority'> Priority </div>
          <div id='ticketCategor' className='due'> Due</div>
          <div id='ticketCategor' className='created'> Created</div>
        </div>
        <ul>
          {ticketReports}
        </ul>
      </nav>
    </div>
    <div className="gradient-border" id="box">
    </div>
  </>)
}


