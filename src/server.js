import http from 'http';
import app from './app.js';

http.createServer(app).listen(8888, () => {
  console.log('listening on port 8888');
});
