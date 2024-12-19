const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Unhandled promise rejections
const promise = new Promise((resolve, reject) => {
    reject(new Error('Something went wrong'));
  });
  
  promise.catch(error => {
    console.error('Promise rejected:', error);
  });