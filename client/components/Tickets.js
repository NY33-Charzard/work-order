import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const colorPicker = (str) => {
  switch (str) {
    case '0Low': {
      return 'Green'
      break;
    }
    case '1Mid': {
      return 'Orange'
      break;
    }
    case '2High': {
      return 'Red'
      break;
    }
    case '0Open': {
      return 'Red'
      break;
    }
    case '3Closed': {
      return 'Black'
      break;
    }
    case '1Working': {
      return 'Green'
      break;
    }
    case '2Assigned': {
      return 'Orange'
      break;
    }
    default: {
      return 'Black'
    }
  }
}
export default function Tickets(ticket) {
  const closeTicket = async (id) => {
    const ticketId = document.getElementById(id);
    const addNewTicketRequest = await fetch(
      'api/orders/closeOrder/' + id
      ,
      {
        method: "put",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

    const parsedCloseTicketResponse = await addNewTicketRequest.json();
    ticketId.remove();

  }

  return (<li><a href="#">
    <div key={uuidv4()} id={ticket.id} className='listItem'>
      <div key={uuidv4()} id='listOptions' className='listType'>{ticket.customer || ticket.type}</div>
      <div key={uuidv4()} id='listOptions' className='listSubject'>{ticket.subject}</div>
      <div key={uuidv4()} id='listOptions' className='listStatus' style={{ color: colorPicker(ticket.status) }}>{(ticket.status).replace(/[0-9]/g, '')}</div>
      {/* <div key={uuidv4()} id='listOptions' className='listPriority' style={{ color: colorPicker(ticket.priority) }}>{(ticket.priority).replace(/[0-9]/g, '')}</div> */}
      {/* <div key={uuidv4()} id='listOptions' className='listDue'>{ticket.due}</div> */}
      {/* <div key={uuidv4()} id='listOptions' className='listlCreated'>{ticket.created}</div> */}
      <button id='listOptions' onClick={() => closeTicket(ticket.id)}>    X    </button>
    </div>
  </a></li>)
}