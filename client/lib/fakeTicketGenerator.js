
export default function fakeTicketGenerator() {
  const ticket = {
    type: '',
    subject: '',
    status: '',
    category: '',
    priority: '',
    due: '',
    created: '',
  }
  //// Returns a random integer from 0 to 9:
  // Math.floor(Math.random() * 10);
  switch (Math.floor(Math.random() * 4)) {
    case 0: {
      ticket.type = 'TASK'
      break;
    }
    case 1: {
      ticket.type = 'BUG'
      break;
    }
    case 2: {
      ticket.type = 'REQ'
      break;
    }
    case 3: {
      ticket.type = 'OTHER'
      break;
    }
  }
  switch (Math.floor(Math.random() * 8)) {
    case 0: {
      ticket.subject = 'Login broke'
      break;
    }
    case 1: {
      ticket.subject = '404'
      break;
    }
    case 2: {
      ticket.subject = 'Img error'
      break;
    }
    case 3: {
      ticket.subject = 'Invalid card'
      break;
    }
    case 4: {
      ticket.subject = 'Button missing'
      break;
    }
    case 5: {
      ticket.subject = 'Gift card error'
      break;
    }
    case 6: {
      ticket.subject = 'Address error'
      break;
    }
    case 7: {
      ticket.subject = 'Phone number issue'
      break;
    }
  }
  switch (Math.floor(Math.random() * 4)) {
    case 0: {
      ticket.status = 'Open'
      break;
    }
    case 1: {
      ticket.status = 'Closed'
      break;
    }
    case 2: {
      ticket.status = 'Assigned'
      break;
    }
    case 3: {
      ticket.status = 'Working'
      break;
    }
  }
  switch (Math.floor(Math.random() * 4)) {
    case 0: {
      ticket.category = 'Frontend'
      break;
    }
    case 1: {
      ticket.category = 'Backend'
      break;
    }
    case 2: {
      ticket.category = 'Design'
      break;
    }
    case 3: {
      ticket.category = 'Unkown'
      break;
    }
  }
  switch (Math.floor(Math.random() * 3)) {
    case 0: {
      ticket.priority = 'High'
      break;
    }
    case 1: {
      ticket.priority = 'Low'
      break;
    }
    case 2: {
      ticket.priority = 'Mid'
      break;
    }
  }
  const randomMonth = (Math.floor(Math.random() * 5));
  const randomDay = (Math.floor(Math.random() * 20));
  ticket.due = (randomMonth + '/' + (randomDay + Math.floor(Math.random() * 11)) + '/2022');
  ticket.created = (randomMonth + '/' + randomDay + '/2022');
  return ticket;
}