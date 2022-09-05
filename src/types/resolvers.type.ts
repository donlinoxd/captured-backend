import { GraphQLResolveInfo } from 'graphql';
import { TUser } from '../models/user.model';
import { TPost } from '../models/post.model';
import { TComment } from '../models/comment.model';
import { TContext } from '../graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCommentInput = {
  body: Scalars['String'];
  postId: Scalars['ID'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  postId: Scalars['ID'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type CreatePostInput = {
  caption: Scalars['String'];
  image: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Comment;
  createPost: Post;
  deleteComment: Scalars['String'];
  deletePost: Scalars['String'];
  editComment: Comment;
  editPostCaption: Post;
  followUser: User;
  likePost: Post;
  loginUser: User;
  logoutUser: Scalars['String'];
  registerUser: User;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID'];
};


export type MutationEditCommentArgs = {
  body: Scalars['String'];
  commentId: Scalars['ID'];
};


export type MutationEditPostCaptionArgs = {
  caption: Scalars['String'];
  postId: Scalars['ID'];
};


export type MutationFollowUserArgs = {
  followedUsername: Scalars['String'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type Post = {
  __typename?: 'Post';
  caption: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  isLiked: Scalars['Boolean'];
  likes: Array<Maybe<Scalars['String']>>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type RegisterUserInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  followers: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddCommentInput: AddCommentInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comment: ResolverTypeWrapper<TComment>;
  CreatePostInput: CreatePostInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<TPost>;
  Query: ResolverTypeWrapper<{}>;
  RegisterUserInput: RegisterUserInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<TUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddCommentInput: AddCommentInput;
  Boolean: Scalars['Boolean'];
  Comment: TComment;
  CreatePostInput: CreatePostInput;
  ID: Scalars['ID'];
  Mutation: {};
  Post: TPost;
  Query: {};
  RegisterUserInput: RegisterUserInput;
  String: Scalars['String'];
  User: TUser;
};

export type CommentResolvers<ContextType = TContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = TContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'input'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  deleteComment?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'commentId'>>;
  deletePost?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'postId'>>;
  editComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationEditCommentArgs, 'body' | 'commentId'>>;
  editPostCaption?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationEditPostCaptionArgs, 'caption' | 'postId'>>;
  followUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'followedUsername'>>;
  likePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationLikePostArgs, 'postId'>>;
  loginUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'username'>>;
  logoutUser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registerUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>;
};

export type PostResolvers<ContextType = TContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = TContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = TContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = TContext> = {
  Comment?: CommentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

