const express = require('express');
const { serverConfig } = require('./config/index.js');
const apiroutes = require('./routes/index.js');

const app = express();

app.use('/api', apiroutes);

app.listen(serverConfig.PORT, () => {
   
   
    console.log(`Successfully started the server on port: ${serverConfig.PORT}`);
    // Logger.info('successfully started the server', "root", {});
});
