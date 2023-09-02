"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderService = exports.getOrdersService = exports.createOrderService = void 0;
const prisma_1 = __importDefault(require("../../../utilities/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = require("./../../../errorFormating/apiError");
const createOrderService = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderedBooks } = payload;
    if (orderedBooks) {
        const orderData = {
            userId: userId,
            orderedBooks: orderedBooks,
        };
        const result = yield prisma_1.default.order.create({
            data: orderData,
        });
        return result;
    }
    else {
        throw new apiError_1.ApiError(http_status_1.default.BAD_GATEWAY, `Order created failed`);
    }
});
exports.createOrderService = createOrderService;
const getOrdersService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (user.role === 'admin') {
        result = yield prisma_1.default.order.findMany({});
    }
    else {
        result = yield prisma_1.default.order.findMany({ where: { userId: user.id } });
    }
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.NOT_FOUND, 'Orders not found');
    }
    return result;
});
exports.getOrdersService = getOrdersService;
const getOrderService = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (user.role === 'customer') {
        result = yield prisma_1.default.order.findUnique({ where: { id, userId: user.id } });
    }
    else {
        result = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
    }
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.NOT_FOUND, 'Orders not found');
    }
    return result;
});
exports.getOrderService = getOrderService;
