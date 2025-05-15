import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 5 }
});

//If a model named 'user' is already created, use it. Otherwise, create a new one using the given schema.
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
