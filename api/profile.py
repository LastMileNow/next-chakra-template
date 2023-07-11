from http.server import BaseHTTPRequestHandler,HTTPServer
from urllib import parse
import json

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header("Access-Control-Allow-Origin", "*") # these two headers are required for CORS
    self.send_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    self.send_header('Content-type', 'application/json') # 'text/plain' for plain text
    self.end_headers()

    # create a dictionary to be returned as json
    ret_obj = { 'name': 'John Doe', 'bio': 'Super human that is also chill.' }
    self.wfile.write(json.dumps(ret_obj).encode())
    return

## Run the server, for local testing
def main():
    port = 80
    print('Listening on localhost:%s' % port)
    server = HTTPServer(('', port), handler)
    server.serve_forever()
if __name__ == "__main__":
    main()