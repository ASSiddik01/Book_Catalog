"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reqValidate_1 = __importDefault(require("../../../middleware/reqValidate"));
const auth_controllers_1 = require("./auth.controllers");
const auth_validations_1 = require("./auth.validations");
const router = express_1.default.Router();
router.route('/signup').post((0, reqValidate_1.default)(auth_validations_1.signUpZod), auth_controllers_1.signUp);
router.route('/signin').post((0, reqValidate_1.default)(auth_validations_1.signInZod), auth_controllers_1.signIn);
exports.default = router;
