const pg = require("pg");

class Pool {
  _pool = null;
  connect(connectionOptions) {
    this._pool = new pg.Pool(connectionOptions);

    return this._pool.query("SELECT 1 + 1;");
  }

  close() {
    return this._pool.end();
  }

  //Really big security issue here!
  query(sql) {
    return this._pool.query(sql, params);
  }
}

module.exports = new Pool();
