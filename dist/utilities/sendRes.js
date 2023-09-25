"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRes = void 0;
const sendRes = (res, data) => {
    const resData = {
        success: data.success,
        statusCode: data.statusCode,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
        token: data.token || null || undefined,
    };
    res.status(data.statusCode).send(resData);
};
exports.sendRes = sendRes;
