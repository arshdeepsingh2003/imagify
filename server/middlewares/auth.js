import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not Authorised. Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.id) {
            req.user = { id: decoded.id };  // ✅ Correct structure expected by your controller
        } else {
            return res.json({ success: false, message: "Not Authorised. Login Again" });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;
