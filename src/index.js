const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line
  console.log(`--------> app active on port ${app.get('port')}`);
});
