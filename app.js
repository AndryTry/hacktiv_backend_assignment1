const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(require('./routes/bookRoute'));
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
