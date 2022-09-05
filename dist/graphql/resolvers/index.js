"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _queryResolver = /*#__PURE__*/ _interopRequireDefault(require("./query.resolver"));
const _userResolver = /*#__PURE__*/ _interopRequireDefault(require("./user.resolver"));
const _mutationResolver = /*#__PURE__*/ _interopRequireDefault(require("./mutation.resolver"));
const _postResolver = /*#__PURE__*/ _interopRequireDefault(require("./post.resolver"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const resolvers = {
    Query: _queryResolver.default,
    Mutation: _mutationResolver.default,
    User: _userResolver.default,
    Post: _postResolver.default
};
const _default = resolvers;
