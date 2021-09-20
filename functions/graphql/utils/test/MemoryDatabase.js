const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require('mongoose');

class MemoryDatabase {
  async connect() {
    this.mongoServer = await MongoMemoryServer.create();
    try {
      const mongoDBURI = this.mongoServer.getUri();
      const connection = await mongoose.connect(mongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      this.database = connection;  


    } catch (error) {
      console.error(error)
    }
  }

  async seed(collection, data) {
    try {
      const result = await this.database.connection.collection(collection).insertMany(data);
      
    } catch (error) {
      console.log(error)
    }
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
    await this.mongoServer.stop();
  }
}

module.exports = MemoryDatabase