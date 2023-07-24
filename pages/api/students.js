
import query from './db.js';
export default function handler(req, res) {
  query("SELECT * from students", req, res);
}
