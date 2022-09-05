"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _userModel = /*#__PURE__*/ _interopRequireDefault(require("../models/user.model"));
const _postModel = /*#__PURE__*/ _interopRequireDefault(require("../models/post.model"));
const _commentModel = /*#__PURE__*/ _interopRequireDefault(require("../models/comment.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const context = ({ req , res  })=>{
    return {
        User: _userModel.default,
        Post: _postModel.default,
        Comment: _commentModel.default,
        req,
        res
    };
};
const _default = context;
