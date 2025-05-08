import dotenv from 'dotenv';
dotenv.config();

const config = {
  mongoURI: process.env.MONGO_URI,
  secretKey: process.env.SECRET_KEY,
};

export default config;
