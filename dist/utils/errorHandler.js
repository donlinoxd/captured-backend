"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorHandler", {
    enumerable: true,
    get: ()=>errorHandler
});
const _apolloServerExpress = require("apollo-server-express");
const errorHandler = (error)=>{
    if (error instanceof _apolloServerExpress.SyntaxError) {
        return new _apolloServerExpress.SyntaxError(error.message);
    }
    if (error instanceof _apolloServerExpress.ValidationError) {
        return new _apolloServerExpress.ValidationError(error.message);
    }
    if (error instanceof _apolloServerExpress.UserInputError) {
        return new _apolloServerExpress.UserInputError(error.message);
    }
    if (error instanceof _apolloServerExpress.AuthenticationError) {
        return new _apolloServerExpress.AuthenticationError(error.message);
    }
    if (error instanceof _apolloServerExpress.ForbiddenError) {
        return new _apolloServerExpress.ForbiddenError(error.message);
    }
    return error;
};
