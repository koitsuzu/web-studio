const https = require('https');

https.get('https://opal.google/app/1AIP68p2roPsyZNFnMAEcm8lSz32cN-7w', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matchTitle = data.match(/<title>(.*?)<\/title>/i);
    if(matchTitle) {
        console.log("TITLE: " + matchTitle[1]);
    } else {
        console.log('No title found');
    }
  });
}).on('error', (e) => {
  console.error(e);
});
