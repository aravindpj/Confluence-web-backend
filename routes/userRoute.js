import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.use(verifyToken);

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/:id/friends", getUserFriends);
router.patch("/:id/:friendId", addRemoveFriend);
router.patch("/:id", updateUser);

export default router;
