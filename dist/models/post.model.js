"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const postSchema = new _mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    likes: [
        String
    ],
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const _default = (0, _mongoose.model)("Post", postSchema);
