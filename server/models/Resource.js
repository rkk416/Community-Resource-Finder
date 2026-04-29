import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: 'text' },
    addr: { type: String, required: true },
    phone: String,
    hours: String,
    emergency: Boolean,
    city: { type: String, index: true },
    lat: Number,
    lng: Number,
    rating: Number,
    reviews: Number,
    categoryId: { type: String, index: true },
    category: { type: String, index: true },
    icon: String
  },
  { timestamps: true }
);

export const Resource = mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
