"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _apolloServerExpress = require("apollo-server-express");
const _jwt = require("../utils/jwt");
const verifyUser = async (req, res)=>{
    const token = req.headers.authorization;
    if (!token) throw new _apolloServerExpress.AuthenticationError("Access Token must be provided");
    const accessToken = token.split(" ")[1];
    const { payload , valid , expired  } = await (0, _jwt.verifyToken)(accessToken);
    if (expired) throw new _apolloServerExpress.AuthenticationError("Access Token is expired");
    if (!valid || !payload) throw new _apolloServerExpress.AuthenticationError("Access Token is not valid");
    return payload;
};
const _default = verifyUser;
