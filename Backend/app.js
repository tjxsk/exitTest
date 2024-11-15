const express = require('express');
const router = require('./Routes/todoRoutes');
const cors = require('cors');
require('./DB/connection');

const app = new express();

app.use(cors());
app.use('/todo',router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});