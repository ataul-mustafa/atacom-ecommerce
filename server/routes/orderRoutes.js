const express = require('express');
const router = express.Router();
const { newOrder, getSingleOrder, myOrders, deleteOrder, getVendorOrders } = require('../controllers/orderController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')



router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router.route("/orders/vendor").get(isAuthenticatedUser, authorizeRoles("vendor"), getVendorOrders);
router.delete(isAuthenticatedUser, authorizeRoles("vendor"), deleteOrder);



module.exports = router;