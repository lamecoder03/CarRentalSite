import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.json({ success: false, message: "Not authorized, token missing" });
    }

    const token = authHeader.split(" ")[1]; // extract actual token after "Bearer"

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id || decoded; // handle both object or plain ID payload

        req.user = await User.findById(userId).select("-password");
        if (!req.user) {
            return res.json({ success: false, message: "User not found" });
        }

        next();
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: "Not authorized, invalid token" });
    }
};
