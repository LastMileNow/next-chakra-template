const { Client } = require("pg");

//const client = new Client(process.env.DATABASE_URL);
const client = new Client("postgresql://sandyhill:vVgiX7CPEnOowG7VsrsfsQ@hollow-buffalo-4648.g8z.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
  await client.connect();
})();

export default function handler(req, res) {
  (async () => {
    try {
      const results = await client.query("SELECT NOW()");
      console.log(results);
      res.status(200).json(results.rows)
    } catch (err) {
      console.error("error executing query:", err);
      res.status(200).json(err);
    } finally {
      // client.end();
    }
  })();
    
}
