import mongoose, { Document, Schema } from 'mongoose';

// Define the interface representing a document in MongoDB
interface ITestimonial extends Document {
  space: string;
  header: string;
  file: string; // Assuming file is a URL or filename
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema corresponding to the document interface
const TestimonialSchema: Schema = new Schema<ITestimonial>({
  space: { type: String, required: true },
  header: { type: String, required: true },
  file: { type: String, required: true }, // File URL or filename
  name: { type: String, required: true },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create and export the model
const Testimonial = mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
