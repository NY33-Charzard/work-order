const db = require('../models/workOrderModel.js');
const express = require('express');
const router = express.Router();

const customerController = {};

customerController.addCustomer = async (req, res, next) => {
  const { name } = req.body;
  const value = [name];
  const query = 'INSERT INTO customer (name) VALUES ($1);' // what does RETURNING * do?

  try {
    const data = await db.query(query, value);
    res.locals.addCustomer = data.rows;
    return next();

  } catch (err) {
    next({
      log: `Error ocurred in addCustomer query controller: ${err}`,
      status: 400,
      message: { err: 'An error ocurred in the addCustomber query controller'},
    })
  }
}

module.exports = customerController;