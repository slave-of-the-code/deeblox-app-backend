require('dotenv').config();
const app = require('./app');

function main() {
  const PORT = app.get('port');

  app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
    // Gustavo_633
  });
}

main();
