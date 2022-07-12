const db = require('../models/workOrderModel.js');
const express = require('express');
const router = express.Router();

const workOrderController = {};


workOrderController.openOrders = async (req, res, next) => {
    const query = 'SELECT * FROM orders WHERE open IS TRUE';
    try {
      const data = await db.query(query);
      res.locals.openOrders = data.rows;
      return next();
    } catch (err) {
      next({
        log: `Error ocurred in openOrders query controller: ${err}`,
        status: 400,
        message: { err: 'An error ocurred in the openOrders query controller'},
      })
    }
}

workOrderController.closedOrders = async (req, res, next) => {
  const query = 'SELECT * FROM orders WHERE open IS FALSE';
  try {
    const data = await db.query(query);
    res.locals.closedOrders = data.rows;
    return next();
  } catch (err) {
    next({
      log: `Error ocurred in closedOrders query controller: ${err}`,
      status: 400,
      message: { err: 'An error ocurred in the closedOrders query controller'},
    })
  }
}

workOrderController.closeOrder = async (req, res, next) => {
  const value = [req.params.id];
  const query = 'UPDATE orders SET open = false WHERE _id = $1'
  try {
    const data = await db.query(query, value);
    // this will just be an empty array
    res.locals.closeOrder = data.rows;
    return next();
  } catch (err) {
    next({
      log: `Error ocurred in closeOrders query controller: ${err}`,
      status: 400,
      message: { err: 'An error ocurred in the closeOrders query controller'},
    })
  }
}

workOrderController.newOrder = async (req, res, next) => {
  const { custID, orderInfo } = req.body;
  const value = [custID, orderInfo];
  const query = 'INSERT INTO orders (cust_account_id, order_info, open) VALUES ($1,$2, true) RETURNING *';

  try {
    const data = await db.query(query, value);
    res.locals.newOrder = data.rows;
    return next();
  } catch (err) {
    next({
      log: `Error ocurred in newOrder query controller: ${err}`,
      status: 400,
      message: { err: 'An error ocurred in the newOrder query controller'},
    })
  }
}


module.exports = workOrderController;