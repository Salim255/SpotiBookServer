const pg = require("pg");

class Pool {
  _pool = null;
  connect(connectionOptions) {
    this._pool = new pg.Pool(connectionOptions);
  }
}

module.exports = new Pool();
