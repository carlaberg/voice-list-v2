const mongoose = require('mongoose');

class DockerDatabase {
  connect() {
    return new Promise(async (resolve, reject) => {
      const connection = await mongoose.connect('mongodb://127.0.0.1:27017/voice-list-backend', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      this.connection = connection;
      resolve(connection)
    })
  }

  async seedCollection(collection, data) {
    return mongoose.connection.collection(collection).insertMany(data);
  }

  async clear() {
    const collections = this.database.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }    
  }

  async stop({ keepData } = {
    keepData: false
  }) {
    if (!keepData) {
      await this.database.connection.dropDatabase();
    }

    await this.database.connection.close();
  }
}

module.exports = DockerDatabase