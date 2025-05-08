// src/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
  sofdelete: true, // Agregar el campo deletedAt
});

const User = mongoose.model('User', userSchema);

export default User;