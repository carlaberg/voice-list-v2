const mongoose = require('mongoose');

const MongoConnector = () => {
    async function initDb() {
        try {
            const db = await mongoose.connect('mongodb+srv://voice-list-dev:FLmNgHZwyQrjKRUg@cluster0.1y8wr.mongodb.net/voice-list-prod?retryWrites=true&w=majority', { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            console.log('successfully connected to mongodb');

        } catch (error) {
            console.error(error);
        } 
    }

    return Object.freeze({
        initDb
    });

}

module.exports = MongoConnector();
