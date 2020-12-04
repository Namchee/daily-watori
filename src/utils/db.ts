import { Db, MongoClient } from 'mongodb';

/**
 * Utility function to connect to a MongoDB server
 * and return the corresponding database.
 *
 * Note: Environment variables should be populated before calling this function!
 * @return {Db} MongoDB database
 */
export async function getDb(): Promise<Db> {
  const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

  console.log(url);

  const dbClient = await MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  console.log(dbClient);
  console.log(dbClient.db(process.env.DB_NAME));

  return dbClient.db(process.env.DB_NAME);
}