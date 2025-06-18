const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Example route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
