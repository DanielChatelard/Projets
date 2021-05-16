# <div style="color : #26B260">**1. Introduction au HTML.**</div>

[Sommaire](./00-Sommaire.md)

Le HTML est un langage de balisage qui utilise des balises pour structurer la page et organiser son contenu.

`````html
    <html lang="fr">
        <head>
           <meta charset="utf-8">
           <title>Titre dans l'onglet du navigateur</title>
         </head>
         <body>
           Ici le contenu de votre première page écrite en HTML !           
         </body>
    </html>>
`````

- Crée en 1990, par Tim Berners-Lee .
- HTML signifie (Hyper Text Markup Language).
- Le terme "Internet" désigne un réseau de communication qui relie tous les ordinateurs.
- Les serveurs sont des ordinateurs sur un réseau, qui ont été configurés pour retourner un résultat (souvent, une page web).
- Chaque ordinateur possède une adresse IP qui lui permet de communiquer avec les autres via le protocole TCP/IP.
- Les serveurs possèdent un nom de domaine qui est converti en adresse IP par le DNS.
- Un site est un ensemble de pages, hébergées sur un serveur.
- Lorsque l'on navigue sur un site web, notre navigateur (le client) envoie des requêtes grâce au protocole HTTP au serveur, afin de récupérer le code source présent sur ce dernier. Une fois ce code récupéré, le navigateur l'interprète et l'affiche.
- Un site web est accessible grâce à son URL, qui permet de l'identifier parmi les autres sites.
- En fonction des éléments présents sur un site, on fait la distinction entre site statique et site dynamique.
- Un site statique est un site dont le contenu ne changera pas, contrairement à un site dynamique qui est rendu interactif par l'usage de scripts.
- Ces balises sont imbriquées entre elles, à la manière de poupées russes.
- On peut y ajouter du style pour modifier le design de la page web grâce au langage CSS, soit avec l'attribut (style=" ") dans une balise de la page html, ou de préférence dans un fichier externe avec l'extension (.css) que l'on rappellera avec la balise link dans le head.

```html
    <html lang="fr">
        <head>
           <meta charset="utf-8">
           <title>Titre dans l'onglet du navigateur</title>
           <link rel="stylesheet" href="monFichierCSS.css">
         </head>
         <body>
            Ici le contenu de votre première page écrite en HTML !         
         </body>
    </html>>
```
