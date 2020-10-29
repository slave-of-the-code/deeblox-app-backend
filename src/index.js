require('dotenv').config();
const app = require('./app');

function main() {
  const PORT = app.get('port');
  //   console.log(process.env.USERNAME);
  //   console.log(__dirname);

  app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
  });
}

main();
