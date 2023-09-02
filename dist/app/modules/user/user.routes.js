"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../../middleware/auth");
const user_controllers_1 = require("./user.controllers");
const user_1 = require("../../../enums/user");
const reqValidate_1 = __importDefault(require("../../../middleware/reqValidate"));
const user_validations_1 = require("./user.validations");
const router = express_1.default.Router();
// example route
router.route('/').get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), user_controllers_1.getUsers);
router
    .route('/:id')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), user_controllers_1.getUser)
    .patch((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, reqValidate_1.default)(user_validations_1.updateUserZod), user_controllers_1.updateUser)
    .delete((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), user_controllers_1.deleteUser);
exports.default = router;
