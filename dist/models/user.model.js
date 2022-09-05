"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const _cryptoJs = /*#__PURE__*/ _interopRequireDefault(require("crypto-js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const userSchema = new _mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        minLengh: 4,
        maxLengh: 20
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        minLengh: 6,
        maxLengh: 25
    },
    name: {
        type: String,
        trim: true,
        minLengh: 2,
        maxLengh: 25
    },
    password: {
        type: String,
        minLength: 8,
        maxLengh: 25
    },
    followers: [
        String
    ]
}, {
    timestamps: true
});
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = _cryptoJs.default.AES.encrypt(this.password, process.env.CRYPTO_KEY).toString();
    next();
});
userSchema.methods.validatePassword = async function(reqPass) {
    const user = this;
    const origPass = _cryptoJs.default.AES.decrypt(user.password, process.env.CRYPTO_KEY).toString(_cryptoJs.default.enc.Utf8);
    return origPass === reqPass;
};
const _default = (0, _mongoose.model)("User", userSchema);
