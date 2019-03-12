const app = require("./app");
const { syncAndSeed } = require("./db/index");

syncAndSeed()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`))
  })
  .catch(e => console.log(`Error syncing and seeding: ${e}`));

module.exports = app;
