
const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config();
const port = process.env.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));