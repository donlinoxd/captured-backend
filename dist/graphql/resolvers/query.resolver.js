"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _errorHandler = require("./../../utils/errorHandler");
const _verifyUser = /*#__PURE__*/ _interopRequireDefault(require("../../middlewares/verifyUser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Query = {
    users: async (_, __, { User  })=>await User.find(),
    user: async (_, { id  }, { User  })=>await User.findById(id),
    posts: async (_, __, { Post , req , res  })=>{
        try {
            const user = await (0, _verifyUser.default)(req, res);
            let posts = await Post.find().sort({
                createdAt: -1
            });
            return posts.map((post)=>{
                return {
                    // @ts-ignore
                    ...post._doc,
                    id: post._id,
                    isLiked: post.likes.includes(user.username)
                };
            });
        } catch (error) {
            throw (0, _errorHandler.errorHandler)(error);
        }
    }
};
const _default = Query;
