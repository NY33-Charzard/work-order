const express = require('express');

const customerController = require('../controllers/customerController');


const router = express.Router();

// a router to create a customer
router.post('/addCustomer', customerController.addCustomer, (req, res) => {
  return res.status(200).json(res.locals.addCustomer)
});

// a router to delete a customer
// router.delete('/deleteCustomer/:id', customerController.deleteCustomer, (req, res) => {
//   return res.status(200).json(res.locals.deletedCustomer)
// });

module.exports = router;