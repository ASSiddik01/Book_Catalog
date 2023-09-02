"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reqValidate_1 = __importDefault(require("../../../middleware/reqValidate"));
const auth_1 = require("../../../middleware/auth");
const book_validations_1 = require("./book.validations");
const user_1 = require("../../../enums/user");
const book_controllers_1 = require("./book.controllers");
const router = express_1.default.Router();
// example route
router
    .route('/create-book')
    .post((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, reqValidate_1.default)(book_validations_1.createBookZod), book_controllers_1.createBook);
router.route('/').get(book_controllers_1.getBooks);
router.route('/:categoryId/category').get(book_controllers_1.getBookByCategoryId);
router
    .route('/:id')
    .get(book_controllers_1.getBook)
    .patch((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), book_controllers_1.updateBook)
    .delete((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), book_controllers_1.deleteBook);
exports.default = router;
