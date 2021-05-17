# <span style="color: #26B260">**Configurer un package nodejs.**</span>

[Sommaire](./00-Sommaire.md)

Créer un dossier script, puis créer un fichier index.html, ensuite aller dans le terminal et se mettre dans le dossier script.

Ensuite tapez npm init, puis pllusieurs fois sur enter, remplir les champs si besoin.

Après il va rajouter un package.json.
Dans un projet, on partage toujours les packages json en plus du fichier html, car ils ont les dépendances de notre projet.

Ensuite la personne qui récupère les fichier devra faire un npm install, pour récupérer les dépendances du projet, qui va lui créer un dossier node_modules automatiquement.

```typescript
/*
{
  "name": "script",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {// ici on peut écrire des commandes.
    "test": "echo \"Error: no test specified\" && exit 1"
    // exemple:
   // "build": "npm build index.html"
    // pour éxécuter "build" on tape (npm run build) dans le terminal.
    },
      "author": "",
      "license": "ISC"
      "dependencies": {
          "express": "^4.17.1"
    }     
}
*/
```
