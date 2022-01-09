export const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
export const mongoose = require('mongoose');
require('dotenv').config();

// bring routes
import { routes } from './routes/routes';
// app
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ Credential: true, origin: [process.env.CLIENT_URL] }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('images'));

//enable files upload
const fileUpload = require('express-fileupload');

// database
/* mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'));
 */
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// import Routes
routes(app);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
