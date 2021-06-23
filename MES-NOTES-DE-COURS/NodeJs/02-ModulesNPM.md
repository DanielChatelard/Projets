# <div style="color: #26B260">**Modules - NPM**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**Caractéristiques des modules**</div>

Encapsulent du code dans une unique unité (un fichier).

Exportent certains éléments.

Node suit le format de CommonJS.

## <div style="color: #26B260">**Importer et exporter des modules**</div>

import, avec require.

```javascript
// fichier app.js
const name = require('./module');

console.log('bonjour' + name);
```

export, avec module.exports

```javascript
// fichier module.js
module.exports.name = "Daniel"

// On peut aussi l'écrire en raccourci.
exports.name = "Daniel"
```
