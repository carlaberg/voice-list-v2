const userFixtures = require('../../user/fixtures')

class Database {
  constructor(database) {
    this.database = database
  }

  connect() {
    return this.database.connect()
  }

  async loadFixtures() {
    this.database.seedCollection('users', await userFixtures())
  }

  stop() {
    this.database.stop()
  }
}

module.exports = Database