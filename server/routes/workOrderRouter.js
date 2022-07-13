const express = require('express');

const workOrderController = require('../controllers/workOrderController');


const router = express.Router();

// a router to return all orders that are open
router.get('/openOrders', workOrderController.openOrders, (req, res) => {
    console.log('made it here');
    return res.status(200).json(res.locals.openOrders);
});


// a router to return all orders that are closed
router.get("/closedOrders", workOrderController.closedOrders, (req, res) => {
    return res.status(200).json(res.locals.closedOrders);
});

// a router to close an order
router.patch('/closeOrder/:id', workOrderController.closeOrder, (req, res) => {
    return res.status(200).json(res.locals.closeOrder)
});

// a router to create an order
router.post('/newOrder', workOrderController.newOrder, (req, res) => {
    return res.status(200).json(res.locals.newOrder)
});


module.exports = router;