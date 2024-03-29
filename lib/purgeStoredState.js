"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function purgeStoredState(config) {
    const storage = config.storage;
    const storageKey = `${config.keyPrefix !== undefined ? config.keyPrefix : constants_1.KEY_PREFIX}${config.key}`;
    return storage.removeItem(storageKey, warnIfRemoveError);
}
exports.default = purgeStoredState;
function warnIfRemoveError(err) {
    if (err && process.env.NODE_ENV !== 'production') {
        console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
    }
}
