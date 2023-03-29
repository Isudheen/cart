const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb://localhost:27017/cart';
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Db connection successful'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App running on 3000'));

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection, shutting down');
  process.exit(1);
});

process.on('SIGTERM', (err) => {
  console.log('SIGTERM received, shutting down');
  process.exit(1);
});
