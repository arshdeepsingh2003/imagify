import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    // Extract token from headers
    const { token } = req.headers;

    // If token not found, deny access
    if (!token) {
        return res.json({ success: false, message: "Not Authorised. Login Again" });
    }

    try {
        // Decode token using JWT secret
        const tokendecode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID to request if valid
        if (tokendecode.id) {
            req.userId = tokendecode.id; // Use req.userId instead of req.body
        } else {
            return res.json({ success: false, message: "Not Authorised. Login Again" });
        }

        // Proceed to next middleware/route
        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;
