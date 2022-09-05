"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = /*#__PURE__*/ _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const connectDB = async ()=>{
    const MONGO_URI = process.env.MONGO_URI;
    _mongoose.default.connect(MONGO_URI).then(()=>{
        console.log("MONGODB Successfully connected");
    }).catch((error)=>{
        console.log(`MONGODB connection error ${error}`);
        process.kill(1);
    });
};
const _default = connectDB;
