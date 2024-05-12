import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import connectDb from "./config/dbConnect";
// routes
import shortUrl from './routes/shortUrl'


const port = process.env.PORT || 5001;

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


// database connection
connectDb()


app.use('/api', shortUrl)
// listening 
app.listen(port, () => {
    console.log(`Server started successfully on http://localhost:${port}`);
  });