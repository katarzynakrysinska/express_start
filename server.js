const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './views/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './views/contact.html'));
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, './views/info.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, './views/history.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/style.css'));
});

app.get('/test.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/test.png'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});