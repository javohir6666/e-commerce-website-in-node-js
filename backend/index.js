require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const models = require('./models/models');
const cors = require('cors');
const app = express();
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router)
app.use(errorHandler)
const start = async() => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
};
start();
