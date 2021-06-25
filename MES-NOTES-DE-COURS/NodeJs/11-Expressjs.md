# <div style="color: #26B260">**Express.js**</div>

[Sommaire](./00-Sommaire.md)

C'est un framework, qui va prendre en charge la création de notre serveur et du routing.

Installer express avec npm i express.

Importer le module express.

```javascript
const url = require('url');
// importer express
const express = require('express');
// initialiser express
const app = express();

// gestion de ma requête
app.get('/', (req, res) => {
    res.writeHead(200, '', {'Content-Type': 'text/plain'});
    res.end('bonjour');
})

app.listen(8000);
```
