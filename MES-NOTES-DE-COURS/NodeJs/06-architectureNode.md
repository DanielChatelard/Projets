# <div style="color: #26B260">**i/o asynchrones, architecture node**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**Input/Output, Entrées/Sorties**</div>

Interactions d'un programme tier avec le disque du système ou un réseau.

Accès à un fichier.

Requête HTTP.

Echange avec la base de données.

## <div style="color: #26B260">**opérations non qualifiées I/O**</div>

L'accès à la mémoire (RAM).

Utilisation de la CPU.

Le problème est que les opérations I/O sont bloquantes.

Nodejs est single-thread.

Bloquant, exécution du process Node.js doit attendre qu'une opération non JavaScript soit achevée.

## <div style="color: #26B260">**Gérer les opérations bloquantes de façon asynchrone**</div>

Synchrone, exécution ligne par ligne.

Asynchrone, exécution en séquence, sur des callback ou des événements.

## <div style="color: #26B260">**Exemple : écrire un fichier**</div>

Le module file system permet de gérer des opérations sur les fichiers de façon asynchrone.

```javascript
fs.readFile(<url>,<callback>);
```

Premièrement importer le module fs

```javascript
// Crée un fichier async-io.js
// import du module fs
const fs = require('fs');

// méthode pour générer de la donnée

function generateData() {
    let data = '1';
    for (i = 0; i < 100000; i++) {
        data = data + Math.random() * 10;
    }
    return data;
}
// fonction callback, qui indique le temps qu'a pris le process
function callback() {
    console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - date) + 'ms')
}
// écrire un fichier
fs.writeFile('bigFile', generateData(), callback)
const date = Date.now();
console.log('Disponible.');
```

## <div style="color: #26B260">**Passer des arguments à un callback.**</div>

```javascript
//fichier async-io.js
const fs = require('fs');

// méthode pour générer de la donnée
function generateData() {
    let data = '1';
    for (i = 0; i < 100000; i++) {
        data = data + Math.random() * 10;
    }
    return data;
}
// fonction callback, qui indique le temps qu'a pris le process
function callback() {
    console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - date) + 'ms')
}
// écrire un fichier
fs.writeFile('bigFile', generateData(), () => callback())
const date = Date.now();
console.log('Disponible.');

// lire un fichier
fs.readFile('bigFile', (err, data) => {
    if(err) {
        throw new Error('Erreur détectée')
    }
}
    console.log(data))
```

La convention dit qu'il faut mettre en premier argument la gestion des erreurs(err) dans une callback.
