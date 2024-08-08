import mongoose, { Schema, Document, Model } from 'mongoose';

interface ISpace extends Document {
  userId: mongoose.Types.ObjectId; // Reference to the user who owns this space
  spaceName: string;
  customMessage: string;
  heading: string;
  subHeading: string;
  image: string; // URL to the image stored on Cloudinary
  createdAt: Date;
  updatedAt: Date;
}

const SpaceSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    spaceName: {
      type: String,
      required: true,
    },
    customMessage: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Space: Model<ISpace> = mongoose.models.Space || mongoose.model<ISpace>('Space', SpaceSchema);

export default Space;
