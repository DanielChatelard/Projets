# <div style="color: #26B260">**Se connecter à une base de données MongoBD**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**Intégrer une base de données**</div>

Base de référence de type NoSql.

Combinaison populaire dans la communauté Node.js, en partie parce que le langage de requête est très similaire à du JSON.

Télécharger mongoDB via son site.

```javascript
// fichier app.js
const url = require('url');
// importer express
const express = require('express');
// initialiser express
const app = express();
// import de mongoDB
const mongoClient = require('mongodb');

require('./router').initRouter(app);

mongoClient.connect(
    "mongodb://localhost/test",
    {useUnifiedTopology: true},
    require('./handlers/mongoDb').connection
)

app.listen(8000);
```
