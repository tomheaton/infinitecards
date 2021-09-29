import {MongoClient} from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewParser: true,
  useUnifiedTopology: true
});

const database = async (req, res, next) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("InfiniteCards");
  return next();
}

const middleware = nextConnect();
middleware.use(database);

export default middleware;