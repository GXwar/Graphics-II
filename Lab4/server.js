const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const cp = require('child_process');

const hostname = '127.0.0.1';
const port = 3000;

const MIME_TYPE = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};

const server = http.createServer((req, res) => {
  // parse request
  let filePath;
  if(req.url==="/"){
    filePath =  "index.html";
  } else{
      filePath = "./" + url.parse(req.url).pathname;
  }
  console.log("Request for "+ filePath + "  received.");

  fs.stat(filePath, err => {
    if(err){
        console.log(err);
    }else{
        var ext = path.extname(filePath);
        ext = ext?ext.slice(1) : 'unknown';
        var contentType = MIME_TYPE[ext] || "text/plain";
        fs.readFile(filePath,function(err,data){
          if(err){
              res.end("<h1>500</h1>Server inner error");
          }else{
              res.writeHead(200,{'content-type':contentType});
              res.end(data.toString());
          }
        });
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// open website with specified browser
const openBrowser = (cmd, url, browser) => {
  const tmp = `-a '${browser}'`;
  const order = `${cmd} ${tmp} ${url}`;
  cp.exec(order, error => {
    // if open failed, use default browser
    if (error) {
      console.log(error);
      cp.exec(`${cmd} ${url}`);
    }
  });
}
openBrowser('open', 'http://127.0.0.1:3000/index.html', 'Google Chrome');
