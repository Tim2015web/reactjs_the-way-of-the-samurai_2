const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const friends = require('./store');

app.use(cors());
app.use(bodyParser.json()); // Используем парсер JSON

app.get('/friends', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedUsers = friends.slice(startIndex, endIndex);
  const totalCount = friends.length;
  res.json({ friends: paginatedUsers, totalCount });
});

app.get('/friends/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = friends.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/follow/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { status } = req.body;
  const user = friends.find(u => u.id === userId);

  if (user) {
    user.status = status;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/updateTitle/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { newTitle } = req.body;
  const user = friends.find(u => u.id === userId);

  if (user) {
    user.title = newTitle;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});