const https = require('https');

const AUTH_URL = 'https://schedule-management-authentication.onrender.com';
const BACKEND_URL = "https://schedule-management-api.onrender.com";
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

// Run the keep-alive function immediately and then every INTERVAL
keepAliveBackend();
keepAliveAuth();
setInterval(keepAlive, INTERVAL);

console.log('Keep-alive script is running...');