"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reqValidate_1 = __importDefault(require("../../../middleware/reqValidate"));
const auth_1 = require("../../../middleware/auth");
const category_validations_1 = require("./category.validations");
const user_1 = require("../../../enums/user");
const category_controllers_1 = require("./category.controllers");
const router = express_1.default.Router();
router
    .route('/create-category')
    .post((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, reqValidate_1.default)(category_validations_1.createCategoryZod), category_controllers_1.createCategory);
router.route('/').get(category_controllers_1.getCategories);
router
    .route('/:id')
    .get(category_controllers_1.getCategory)
    .patch((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), category_controllers_1.updateCategory)
    .delete((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), category_controllers_1.deleteCategory);
exports.default = router;
