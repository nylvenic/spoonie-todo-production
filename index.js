const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist')); // Adjust the path as necessary

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './dist' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
