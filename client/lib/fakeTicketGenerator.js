
export default function fakeTicketGenerator() {
  const ticket = {
    type: '',
    subject: '',
    status: '',
    priority: '',
    due: '',
    created: '',
  }
  //// Returns a random integer from 0 to 9:
  // Math.floor(Math.random() * 10);
  switch (Math.floor(Math.random() * 4)) {
    case 0: {
      ticket.type = 'Matt'
      break;
    }
    case 1: {
      ticket.type = 'Carol'
      break;
    }
    case 2: {
      ticket.type = 'Ryan'
      break;
    }
    case 3: {
      ticket.type = 'Mark'
      break;
    }
  }
  switch (Math.floor(Math.random() * 8)) {
    case 0: {
      ticket.subject = 'Toilet broke'
      break;
    }
    case 1: {
      ticket.subject = 'Sink clogged'
      break;
    }
    case 2: {
      ticket.subject = 'Assembly'
      break;
    }
    case 3: {
      ticket.subject = 'Sink repair'
      break;
    }
    case 4: {
      ticket.subject = 'Leak'
      break;
    }
    case 5: {
      ticket.subject = 'Burst pipe'
      break;
    }
    case 6: {
      ticket.subject = 'Door wont shut'
      break;
    }
    case 7: {
      ticket.subject = 'Stuck drawer'
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
  ticket.due = (randomMonth + 1 + '/' + (randomDay + Math.floor(Math.random() * 11)) + '/2022');
  ticket.created = (randomMonth + 1 + '/' + randomDay + '/2022');
  return ticket;
}