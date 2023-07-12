//getUser , getUserFriends, addRemoveFriend
import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import ApiFilter from "../utils/ApiFilter.js";
import catchAsync from "../utils/catchAsync.js";

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id });
  if (!user) return next(new ApiError("User not longer available :(", 404));
  res.status(200).json(user);
});

export const getUsers = catchAsync(async (req, res) => {
  let data = new ApiFilter(User.find(), req.query).search();
  const user = await data.query;
  res.status(200).json(user);
});

export const getUserFriends = catchAsync(async (req, res) => {
  const { id } = req.params;
  const currentUser = await User.findById({ _id: id });
  const friends = await Promise.all(
    currentUser.friends.map((id) => User.findById({ _id: id }))
  );
  const formatedFriends = friends.map(
    ({
      _id,
      firstName,
      lastName,
      picturePath,
      friends,
      location,
      occupation,
    }) => {
      return {
        _id,
        firstName,
        lastName,
        picturePath,
        friends,
        location,
        occupation,
      };
    }
  );
  res.status(200).json({ friends: formatedFriends });
});

export const addRemoveFriend = catchAsync(async (req, res) => {
    const { id: currentUserId, friendId } = req.params;
    const currentUser = await User.findById({ _id: currentUserId });
    const currentUserFriend = await User.findById({ _id: friendId });
    if (currentUser.friends.includes(friendId)) {
      currentUser.friends = currentUser.friends.filter((id) => id !== friendId);
      currentUserFriend.friends = currentUser.friends.filter(
        (id) => id !== currentUserId
      );
    } else {
      currentUser.friends.push(friendId);
      currentUserFriend.friends.push(currentUserId);
    }
    await currentUser.save();
    await currentUserFriend.save();
     const friends = await Promise.all(
      currentUser.friends.map((id) => User.findById({ _id: id }))
    );
    const formatedFriends = friends.map(
      ({
        _id,
        firstName,
        lastName,
        picturePath,
        friends,
        location,
        occupation,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          picturePath,
          friends,
          location,
          occupation,
        };
      }
    );
    res.status(200).json({ friends: formatedFriends });
});

export const updateUser=catchAsync(async (req,res,next) =>{
    const {id}=req.params 
    if(req.body.password) return next(new ApiError("user can't update password here",409))
    const updatedUser=await User.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.status(200).json(updatedUser)
}) 