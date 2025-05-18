import userModel from "../models/userModel.js"; 
import FormData from 'form-data'; 
import axios from 'axios'; 

const generateImage = async (req, res) => {
    try {
        const userId = req.user?.id; // get from auth middleware
        const { prompt } = req.body;

        if (!userId || !prompt) {
            return res.json({ success: false, message: "Missing Details" });
        }
        // Fetch the user from the database using the provided userId
        const user = await userModel.findById(userId);

        // If user does not exist
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Check if the user has enough credits to generate an image
        if (user.creditBalance <= 0) {
            return res.json({ success: false, message: "No Credit Balance", creditBalance: user.creditBalance });
        }

        // Prepare the form data with the prompt
        const formData = new FormData();
        formData.append("prompt", prompt);

        // Make a POST request to the ClipDrop API with the prompt
        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    'x-api-key': process.env.CLIPDROP_API, // Use API key from environment variables
                },
                responseType: 'arraybuffer' // Receive raw binary data
            }
        );

        // Convert binary image data to base64 format
        const base64Image = Buffer.from(data, "binary").toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`; // Create data URI

        // Deduct one credit from the user's account
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        // Send success response with the generated image and updated credit balance
        res.json({
            success: true,
            message: "Image Generated",
            creditBalance: user.creditBalance - 1,
            resultImage
        });

    } catch (error) {
        // Handle and log any errors that occur
        console.error("Error generating image:", error.message);
        res.json({ success: false, message: error.message });
    }
};

export default generateImage;
