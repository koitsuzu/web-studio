const https = require('https');

https.get('https://dodasports.doda.jp/shigotozukan/2026/', (res) => {
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
});
