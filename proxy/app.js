require('dotenv').config();
const app = require('./server');

app.listen(process.env.PORT, process.env.IP_ADDRESS, () => console.log('App started successfully on port '+process.env.PORT));
