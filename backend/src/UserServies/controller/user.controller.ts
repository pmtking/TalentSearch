import User from "../model/user.model";

export const RegisterController = async (req: any, res: any) => {
    const { email, firstName, lastName, phoneNumber, skills, resume } = req.body;

    try {
        // Validate required fields
        if (!email || !firstName || !lastName || !phoneNumber || !resume) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Create new user
        const newUser = new User({
            email,
            firstName,
            lastName,
            phoneNumber,
            skills,
            resume,
        });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({ message: "An error occurred while registering the user" });
    }
};