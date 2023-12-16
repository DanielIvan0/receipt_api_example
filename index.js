require('dotenv').config();

const app = require('./src/app');

const { PORT: port } = process.env;

app.listen(port, () => `Server up and running on port ${port}`);