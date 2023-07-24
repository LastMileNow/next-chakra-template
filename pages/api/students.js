
import query from './db.js';
export default function handler(req, res) {
  const q = req.query;
  if (Object.keys(q).length === 0) {
    query("SELECT * from students", req, res);
  } else {
    console.log(q);
    let k = Object.keys(q)[0];
    console.log(k+" "+q[k]);
    query("SELECT * from students where "+k+"='"+q[k]+"'", req, res);
  }
  
}
