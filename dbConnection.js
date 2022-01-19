const {MongoClient} = require('mongodb')

const uri = "mongodb+srv://taopan2021:tp1234567@taocluster.lvqyr.mongodb.net/project-tao?retryWrites=true&w=majority"

const mongoClient = new MongoClient(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

mongoClient.connect((err, db) => {
    if(!err) {
        console.log('-> database connected');
    } else {
        console.log('-> database error: ', err);
    }
})

module.exports.mongoClient = mongoClient