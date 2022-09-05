"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const commentSchema = new _mongoose.Schema({
    body: {
        type: String,
        required: true,
        minLength: 1
    },
    postId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const _default = (0, _mongoose.model)("Comment", commentSchema);
