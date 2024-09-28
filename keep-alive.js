const https = require('https');
const http = require('http');
const PORT = process.env.PORT || 3000;

const AUTH_URL = 'https://schedule-management-authentication.onrender.com/api/v1/user/doctors';
const BACKEND_URL = "https://schedule-management-api.onrender.com/patient/getAllPatient/One%20Dentistry";
const INTERVAL = 14 * 60 * 1000; // 14 minutes in milliseconds

function keepAliveAuth() {
  https.get(AUTH_URL, (res) => {
    if (res.statusCode === 200) {
      console.log('Auth pinged successfully');
    } else {
      console.log('Auth ping failed');
    }
  }).on('error', (err) => {
    console.error('Error pinging server:', err);
  });
}

function keepAliveBackend() {
    https.get(BACKEND_URL, (res) => {
      if (res.statusCode === 200) {
        console.log('Backend pinged successfully');
      } else {
        console.log('Backend ping failed');
      }
    }).on('error', (err) => {
      console.error('Error pinging server:', err);
    });
  }

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Keep-alive server is running');
  });

  server.listen(PORT, () => {
    console.log(`Keep-alive server is running on port ${PORT}`);
  });

// Run the keep-alive function immediately and then every INTERVAL
keepAliveBackend();
keepAliveAuth();
setInterval(keepAliveBackend, INTERVAL);
setInterval(keepAliveAuth, INTERVAL);

console.log('Keep-alive script is running...');