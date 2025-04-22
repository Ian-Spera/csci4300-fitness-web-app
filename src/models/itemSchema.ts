import mongoose, { Schema, Document, Model } from "mongoose";

// Mongoose provides properties such as the _id in Document, we extend this
interface IItem extends Document {
  userID: string;
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
}

const itemSchema = new Schema<IItem>({
  userID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  fats: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  }
});

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;
