import mongoose, { Schema, Document, Model } from "mongoose";

// Mongoose provides properties such as the _id in Document, we extend this
interface IItem extends Document {
  food_item: string;
  amount: number;
}

const itemSchema = new Schema<IItem>({
  amount: {
    type: Number,
    required:true
  },
  food_item: {
    type: String,
    required: true,
  }
});

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;
