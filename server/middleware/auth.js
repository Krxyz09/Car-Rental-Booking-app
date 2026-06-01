import jwt from 'jsonwebtoken';
import users from '../models/users.js';

export const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;

        if (!authHeader) {
            return res.json({ success: false, message: 'not authorized' });
        }

        // Accept both 'Bearer <token>' and raw token values
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

        if (!token) {
            return res.json({ success: false, message: 'not authorized' });
        }

        // Verify the token and extract payload
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (!payload || !payload.id) {
            return res.json({ success: false, message: 'not authorized' });
        }

        // Attach user to request (exclude password)
        const user = await users.findById(payload.id).select('-password');
        if (!user) {
            return res.json({ success: false, message: 'not authorized' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error.message);
        return res.json({ success: false, message: 'not authorized' });
    }
};