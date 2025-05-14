import express from 'express';     
import cors from 'cors';           
import 'dotenv/config';            // Loads environment variables from a .env file

const PORT = process.env.PORT || 4000;

//Create an Express application
const app = express();

//Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors()); // Middleware to enable CORS (Cross-Origin Resource Sharing)

app.get("/", (req, res) => res.send("API WORKING")); // Basic route to test if the server is working

// Start the server and listen on the specified port
app.listen(PORT, () => console.log("Server running on port " + PORT));
