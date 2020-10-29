const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Ok!');
});
app.use('/api/email', require('./routes/email'));
// app.use("/api/test", require("./routes/test"));

module.exports = app;
