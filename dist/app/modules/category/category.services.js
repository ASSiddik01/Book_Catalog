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
exports.deleteCategoryService = exports.updateCategoryService = exports.getCategoryService = exports.getCategoriesService = exports.createCategoryService = void 0;
const prisma_1 = __importDefault(require("../../../utilities/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = require("./../../../errorFormating/apiError");
const category_constants_1 = require("./category.constants");
const createCategoryService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.create({
        data,
    });
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.BAD_GATEWAY, `Category created failed`);
    }
    return result;
});
exports.createCategoryService = createCategoryService;
const getCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.findMany({
        include: category_constants_1.booksPopulate,
    });
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.NOT_FOUND, 'Categories fetched failed');
    }
    return result;
});
exports.getCategoriesService = getCategoriesService;
const getCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.findUnique({
        where: {
            id,
        },
        include: category_constants_1.booksPopulate,
    });
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.NOT_FOUND, 'Category fetched failed');
    }
    return result;
});
exports.getCategoryService = getCategoryService;
const updateCategoryService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.update({
        where: {
            id,
        },
        data: payload,
    });
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.BAD_REQUEST, 'Category update failed');
    }
    return result;
});
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.delete({
        where: {
            id,
        },
    });
    if (!result) {
        throw new apiError_1.ApiError(http_status_1.default.BAD_REQUEST, 'Category delete failed');
    }
    return result;
});
exports.deleteCategoryService = deleteCategoryService;
