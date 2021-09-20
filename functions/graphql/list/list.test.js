var mongoose = require('mongoose')
const MemoryDatabase = require('../utils/test/MemoryDatabase')
const DockerDatabase = require('../utils/test/DockerDatabase')
const Database = require('../utils/test/Database')
const db = new Database(new DockerDatabase())
const List = require('./list.model')
const userFixtures = require('../user/fixtures')

beforeAll(async () => {
  await db.connect();
  // const res = await testDb.connection.collection('user').insertMany(userFixtures());
  
  // testDb.collection('user').insertMany(userFixtures()) 
  console.log('db', db.loadFixtures)


  await db.loadFixtures()

    // await db.seed('listitems', listItems)
})

afterAll(async () => {
  // db.stop();
}) 

describe('list', () => {
    it('should return lists the current user is a collaborator on', () => {
        // const list = await List.create({ 
        //     name: 'Ulle Bulle',
        //     createdBy: mongoose.Types.ObjectId()
        // })
        // const allLists = await List.find({})

        // console.log(allLists)
    })
})