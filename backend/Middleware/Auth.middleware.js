import { clerkClient } from "@clerk/express";
import { json } from "express";

// to protect educator route such that some authorization can be given to educator only rather than all users
export const protectEducator = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const response = await clerkClient.users.getUser(userId);

    if (response.publicMetadata.role !== "educator") {
      return res.json({ success: false, message: "" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
