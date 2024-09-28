const https = require('https');

const RENDER_URL = 'https://your-app-name.onrender.com'; // Replace with your Render URL
const INTERVAL = 14 * 60 * 1000; // 14 minutes in milliseconds

function keepAlive() {
  https.get(RENDER_URL, (res) => {
    if (res.statusCode === 200) {
      console.log('Server pinged successfully');
    } else {
      console.log('Server ping failed');
    }
  }).on('error', (err) => {
    console.error('Error pinging server:', err);
  });
}

// Run the keep-alive function immediately and then every INTERVAL
keepAlive();
setInterval(keepAlive, INTERVAL);

console.log('Keep-alive script is running...');