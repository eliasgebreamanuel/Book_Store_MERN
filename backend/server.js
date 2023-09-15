import express, { response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT ,mongoDBURL} from './config.js';
import { Book } from './models/bookSchema.js';
import booksRoute from './routes/booksRoute.js';

// app config
const app = express();
const port = process.env.PORT || 8081;

// middlewares
app.use(express.json());
// Middleware for handling CORS POLICY
// Option 1:L Allow All Origins with Default od cors(*)

app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );

// api routes
// app.get('/', (req, res) => res.status(200).send('Hello, world!'));
// Route for sace a new Book
app.use('/books', booksRoute);


// DB config
mongoose.connect(mongoDBURL)
.then(() => {
  console.log('App connected to database');
  app.listen(PORT, () =>{
    console.log(`App is listening to port: ${PORT}`);
  });
})
.catch((error) => {
  console.log(error);
})
// listen
