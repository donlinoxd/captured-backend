"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createToken: ()=>createToken,
    verifyToken: ()=>verifyToken
});
const _jsonwebtoken = /*#__PURE__*/ _interopRequireWildcard(require("jsonwebtoken"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const createToken = async (payload, options)=>{
    return _jsonwebtoken.default.sign(payload, process.env.JWT_KEY, options);
};
const verifyToken = async (token)=>{
    try {
        const payload = _jsonwebtoken.default.verify(token, process.env.JWT_KEY);
        return {
            payload: payload,
            valid: true,
            expired: false
        };
    } catch (error) {
        if (error instanceof _jsonwebtoken.TokenExpiredError) {
            return {
                payload: null,
                valid: false,
                expired: error.message === "jwt expired"
            };
        } else {
            return {
                payload: null,
                valid: false,
                expired: false
            };
        }
    }
};
