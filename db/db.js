const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Connected successfully.');
}, err => {
  console.log('Connection to db failed: ' + err);
});

module.exports = mongoose.connection;
