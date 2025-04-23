import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  calories: {type: Number},
  protein: {type: Number},
  fat: {type: Number},
  carbs: {type: Number}

});
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;

