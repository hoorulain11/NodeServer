import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {

// This contains only the URL that is present in the actual HTTP request
    const url = req.url;
// first route
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page.');
    }else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
    }  else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at contact@example.com.');
    }else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})
    
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });