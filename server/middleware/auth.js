import jwt from 'jsonwebtoken';
import User from '../models/users.js';

export const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.json({ success: false, message: "Not authorized" });
        }

        const token = authHeader.split(' ')[1];
        
        // Verify returns the object: { id: "..." }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by the id property in the decoded object
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        req.user = user; // Attach user to the request
        next();
    } catch (error) {
        return res.json({ success: false, message: "Invalid or expired token" });
    }
}