const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// const database = require("./database");

dotenv.config();
// database.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server in running on port ' + port));
