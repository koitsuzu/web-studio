const https = require('https');

https.get('https://opal.google/app/1A0ZYDC4SrbIpIZfFcDCx9kf7DNB2845K', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    if(match) {
        console.log("FOUND: " + match[1]);
    } else {
        console.log('No og:image found');
    }
  });
}).on('error', (e) => {
  console.error(e);
});
