"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../../middleware/auth");
const order_controllers_1 = require("./order.controllers");
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
// example route
router.route('/create-order').post((0, auth_1.auth)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controllers_1.createOrder);
router
    .route('/')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controllers_1.getOrders);
router
    .route('/:orderId')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controllers_1.getOrder);
exports.default = router;
