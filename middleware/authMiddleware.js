import { UnauthenticatedError, BadRequestError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

// CHECK AUTHENTICATION - TOKEN
export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) throw new UnauthenticatedError("Authentication invalid.");
    try {
        const { userId, role } = verifyJWT(token);
        const testUser = userId === "67da1e31f00aa7f3815189f8";
        req.user = { userId, role, testUser }
        next();
    } catch (error) {
        throw new UnauthenticatedError("Authentication invalid.");
    }
};

//CHECK AUTHORIZATION - ROLE
export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError("Unauthorized to access this route");
        }
        next();
    };
};

//CHECK TEST USER
export const checkForTestUser = (req, res, next) => {
    if (req.user.testUser) {
        throw new BadRequestError("Demo User. Read Only!");
    }
    next();
};