"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createWebStorage_1 = __importDefault(require("./createWebStorage"));
exports.default = createWebStorage_1.default('session');
