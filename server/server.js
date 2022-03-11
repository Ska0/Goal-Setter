const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.port || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));