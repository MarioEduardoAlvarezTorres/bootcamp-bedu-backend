const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes')
const app = express();
app.use(express.json());
app.use('/',routes)

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB')
} catch (error) {
    console.log('Unable to connect to DB:',error);
}
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server Listening on PORT ${PORT}`)
});