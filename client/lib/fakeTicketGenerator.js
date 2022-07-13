
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
  const names = ['Matt', 'Carol', 'Ryan', 'Mike', 'Celeste', 'Jonas', 'Michael', 'Summer', 'Cortney', 'Katt', 'Aaron', 'Karol', 'Dylan', 'Savana', 'Stuart', 'Tyler', 'Nyx', 'Nova'];
  const subjects = ['Toilet broke', 'Sink clogged', 'Assembly', 'Sink repair', 'Leak', 'Burst pipe', 'Door wont shut', 'Stuck drawer'];
  const statuss = ['0Open', '3Closed', '2Assigned', '1Working']
  const prioritys = ['0Low', '1Mid', '2High'];
  const randomMath = (num) => {
    return Math.floor(Math.random() * num);
  }
  ticket.type = names[(randomMath(names.length))];
  ticket.subject = subjects[(randomMath(subjects.length))];
  ticket.status = statuss[(randomMath(statuss.length))];
  ticket.priority = prioritys[(randomMath(prioritys.length))];

  const randomMonth = (randomMath(5));
  const randomDay = (randomMath(20));
  ticket.due = (randomMonth + 1 + '/' + (randomDay + randomMath(11)) + '/2022');
  ticket.created = (randomMonth + 1 + '/' + randomDay + '/2022');
  return ticket;
}