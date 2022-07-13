import React, { Component } from 'react';
const colorPicker = (str) => {
  switch (str) {
    case 'Low': {
      return 'Green'
      break;
    }
    case 'Mid': {
      return 'Orange'
      break;
    }
    case 'High': {
      return 'Red'
      break;
    }
    case 'Open': {
      return 'Red'
      break;
    }
    case 'Closed': {
      return 'Black'
      break;
    }
    case 'Working': {
      return 'Green'
      break;
    }
    case 'Assigned': {
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
    <div className='listItem'>
      <div id='listOptions' className='listType'>{ticket.customer}</div>
      <div id='listOptions' className='listSubject'>{ticket.subject}</div>
      <div id='listOptions' className='listStatus' style={{ color: colorPicker(ticket.status) }}>{ticket.status}</div>
      <div id='listOptions' className='listPriority' style={{ color: colorPicker(ticket.priority) }}>{ticket.priority}</div>
      <div id='listOptions' className='listDue'>{ticket.due}</div>
      <div id='listOptions' className='listlCreated'>{ticket.created}</div>
    </div>
  </a></li>)
}