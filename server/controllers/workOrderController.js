const db = require('../models/workOrderModel.js');
const express = require('express');
router = express.Router();

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

workOrderController.closedOrders = (req, res, next) => {
    const query = 'SELECT * FROM orders WHERE open IS FALSE';
}

module.exports = workOrderController;