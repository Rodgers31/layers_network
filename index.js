const server = require('express')();

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
