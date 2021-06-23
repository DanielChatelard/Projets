# <div style="color: #26B260">**Découvrir NodeJs**</div>

[Sommaire](./00-Sommaire.md)

Node.js est un environnement d'exécution JavaScript construit sur le moteur JavaScript V8 de Chrome.

il permet d'exécuter du JavaScript côté serveur.

Crée en 2009 par Ryan Dahl.

Particularité, c'est un exécutable "single-thread", cela veux dire qu'il ne peux faire qu'une seule chose à la fois.

Conçu d'une architecture asynchrone et d'un approche événementielle.

## <div style="color: #26B260">**Event Loop**</div>

Voir doc

## <div style="color: #26B260">**Installation de l'environnement de développement**</div>

Node.js

NPM, gestionnaire de packages.

Télécharger Node.js depuis le site nodejs.org.

Vérifier que nodejs à bien été installaler, tapez dans le terminal.

```terminal
Savoir quel est la version installée.
node -v

L'aide avec 
node -h

L'option print, permet d'afficher une string.

node -p 'bonjour'

L'option evaluate, permet d'afficher une expression JavaScript.

node -e console.log('bonjour')
node -e console.log(1 + 1)

Vérifier que npm a bien été installé.

npm -v

Permet de télécharger et installer des packages.
```

## <div style="color: #26B260">**Déboger Node.js**</div>

L'option node --inspect suivi du nom du fichier.

voir doc.

## <div style="color: #26B260">**REPL**</div>

Read-Eval-Print-Loop, lire, évaluer, imprimer et effectuer une boucle.

## <div style="color: #26B260">**Créer des variables d'environnement**</div>
