import mongoose, { Document, Schema, Model } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
});

const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel;
