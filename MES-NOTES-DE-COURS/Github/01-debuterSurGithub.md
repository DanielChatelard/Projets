# Débuter sur Github

[Sommaire](./00-Sommaire.md)

    GitHub est un outil permettant la centralisation du code source d'une application afin de le partager avec tous les membres d'une équipe.

    Il faut pour cela créer un dépôt, qui sera l'espace de stockage distant du projet.

    L'identification d'un compte GitHub peut être faite en SSH grâce à l'utilisation d'une paire de clés publique/privée.

    Il est possible de synchroniser un dépôt Git local avec un dépôt Git distant grâce à la commande git remote add.

    Il est possible de lister tous les dépôts d'un projet avec git remote -v et les détails d'un dépôt en particulier peuvent être visualisés avec la commande git remote show nom_du_depot.

## Créer un dépôt distant

GitHub est un site web proposant des services d'hébergement de projets de développement d'applications grâce à l'utilisation de Git.

La première étape pour utiliser les services proposés par GitHub est de créer un compte, vous pouvez le faire à l'adresse : [Github.com](#fragment)

## Faciliter et sécuriser l'accès à son compte GitHub

GitHub permet de faciliter et de sécuriser l'accès à un compte en y ajoutant une clé SSH afin de valider l'identité de l'utilisateur.

Pour cela, il suffit de suivre la procédure décrite ici : [https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

Cela permet de ne pas devoir saisir de mot de passe lorsqu'une action est effectuée vers le dépôt.

## Synchroniser un projet local avec un dépôt distant

Une fois le dépôt distant créé sur GitHub et l'accès SSH configuré, il faut à présent synchroniser le projet versionné localement avec son dépôt distant.

Pour cela, il faut préciser à Git comment s'y interfacer, au moyen de la commande git remote add.

Celle-ci attend en paramètre le nom du dépôt distant. Par convention, le dépôt par défaut est nommé origin. Il faut également préciser l'URL d'accès à ce dépôt.

Il est possible de lister les différents dépôts auxquels le projet est rattaché, grâce à la commande git remote -v.

## Ajouter un dépôt distant

```markdown
# L'URL d'accès au dépôt distant peut être récupérée dans l'interface de GitHub grâce au bouton Clone or download.
git remote add origin git@github.com:JohnDoeDemo/repository-exemple.git

# La commande git remote -v affiche la liste des dépôts associés au projet.
git remote -v
```

## Afficher les détails d'un dépôt configuré

Afin de visualiser les détails d'un dépôt déjà configuré, il est possible d'utiliser la commande git remote show nom_du_depot.

Cela permet alors d'afficher la liste des URL configurées pour le dépôt distant, ainsi que la liste des branches distantes suivies.

Cette commande informe également l'utilisateur que, s'il est sur la branche master et qu'il lance git pull, il va automatiquement fusionner la branche master du dépôt distant après avoir récupéré toutes les références sur le serveur distant. Cela donne aussi la liste des autres références qu'il aura tirées.

```markdown
remote origin
  Fetch URL: git@github.com:url_depot.git
  Push  URL: git@github.com:url_depot.git
  HEAD branch: master
  Remote branches:
    master     tracked
    new-branch tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```
