import Post from "../models/Post.js";
import User from "../models/User.js";
import catchAsync from "../utils/catchAsync.js";

export const createPost = catchAsync(async (req, res) => {
  const { userId, description, picturePath } = req.body;
  const user = await User.findById({ _id: userId });
  const newPost = new Post({
    userId,
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    description,
    picturePath,
    userPicturePath: user.picturePath,
    likes: {},
    comments: [],
  });
  await newPost.save();
  const posts = await Post.find().sort("-createdAt");
  res.status(200).json(posts);
});

export const getFeedPosts = catchAsync(async (req, res) => {
    const posts = await Post.find().sort("-createdAt");
    res.status(200).json(posts);
});

export const getUserPosts = catchAsync(async (req, res) => {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
});

export const likePost = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById({ _id: id });
    const isLiked = post.likes.get(userId);
    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );
    res.status(200).json(updatedPost);
});
