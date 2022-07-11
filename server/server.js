const express = require('express');
const app = express();
const path = require('path');

const workOrderRouter = require('./routes/workOrderRouter');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', workOrderRouter);

// Unknown route handler
app.use('*', (req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Create a Node.js HTTP server that listens on port 3333.
app.listen(3333, () => {
  console.log('listening on port 3333');
});