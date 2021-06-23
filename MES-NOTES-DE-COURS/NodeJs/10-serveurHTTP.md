# <div style="color: #26B260">**Instancier un serveur local HTTP**</div>

[Sommaire](./00-Sommaire.md)

Premièrement importer le module HTTP.

```javascript
// créer un fichier http.js et importer le module HTTP.
const http = require('http');
const url = require('url');

function handleRequest(req, res) {
//Implémenter un request handler HTTP.
    const parsedUrl = url.parse(req.url);
    if('/' === parsedUrl.path) {
        res.writeHead(200, ' ', {'Content-Type': 'text/plain'})
        res.end('bonjour.');
    }    
}

// méthode createServer
const serveur = http.createServer(handleRequest);

// écoute du port qui me convient
server.listen(8000);
```
