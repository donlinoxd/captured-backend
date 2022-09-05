"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const Post = {
    comments: async ({ _id  }, _, { Comment  })=>{
        try {
            return await Comment.find({
                postId: _id
            });
        } catch (error) {
            throw error;
        }
    },
    updatedAt: ({ updatedAt  })=>updatedAt.toLocaleString(),
    createdAt: ({ createdAt  })=>createdAt.toLocaleString()
};
const _default = Post;
