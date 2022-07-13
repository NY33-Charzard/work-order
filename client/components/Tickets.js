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
  return (<li><a href="#">
    <div key={uuidv4()} className='listItem'>
      <div key={uuidv4()} id='listOptions' className='listType'>{ticket.customer || ticket.type}</div>
      <div key={uuidv4()} id='listOptions' className='listSubject'>{ticket.subject}</div>
      <div key={uuidv4()} id='listOptions' className='listStatus' style={{ color: colorPicker(ticket.status) }}>{(ticket.status).replace(/[0-9]/g, '')}</div>
      <div key={uuidv4()} id='listOptions' className='listPriority' style={{ color: colorPicker(ticket.priority) }}>{(ticket.priority).replace(/[0-9]/g, '')}</div>
      <div key={uuidv4()} id='listOptions' className='listDue'>{ticket.due}</div>
      <div key={uuidv4()} id='listOptions' className='listlCreated'>{ticket.created}</div>
    </div>
  </a></li>)
}