# Ignorer des fichiers

[Sommaire](./00-Sommaire.md)

    On indique que l'on souhaite ignorer certains fichiers dans un dépôt, grâce à un fichier .gitignore.

    Les syntaxes reconnues sont des expressions régulières simplifiées par des shells.

## Ignorer des éléments

Pour permettre à Git d'ignorer certains éléments, il convient d'initialiser un nouveau fichier intitulé .gitignore. C'est au sein de ce fichier que devront être listés l'ensemble des éléments qui ne doivent pas être suivis.

S'il convient de l'initialiser dès le début du projet, celui-ci doit impérativement vivre au même rythme que l'évolution du projet.

## Les syntaxes possibles

Dans ce type de fichiers, les syntaxes reconnues correspondent à des expressions régulières simplifiées par des shells.

Voici les différentes syntaxes à adopter :

    # permet d'ajouter un commentaire

    * permet d'ignorer tous les éléments répondant à un certain pattern, par exemple *.docx ignore tous les documents Word

    ! permet d'ajouter une exception à l'une des règles préalablement écrites, par exemple !documentation.docx

    /fichier-temporaire.tmp permet d'ignorer le fichier fichier-temporaire.tmp situé à la racine du projet

    build/ ignore tous les éléments situés dans le répertoire build

## Exemple: Ajouter des éléments à ignorer

```markdown
# ignore tout les fichiers .pdf
*.pdf
```

```markdown
# sauf documentation.pdf malgré la règle précédente
!documentation.pdf

# ignorer tout ce qui se trouve dans le dossier TODO qui est à la racine du projet
/TODO

# ignorer tous les fichiers dans le répertoire cache
cache/

# ignorer tous les fichiers .txt sous le répertoire doc/
doc/**/*.txt

```

## Quels éléments ignorer ?

Par convention, voici quelques exemples de fichiers régulièrement ignorés :

    Les répertoires de librairies externes tels que les répertoires vendor ou node_modules

    Les fichiers auto-générés : répertoires de build, répertoires de cache, configuration de l'IDE

    Les fichiers dont la configuration est propre à un environnement, un utilisateur, ou contient des données sensibles (identifiants de base de données, par exemple)

    Les fichiers trop volumineux, pour lesquels d'autres solutions existent

D'une manière générale, il est préférable de ne commit que les fichiers essentiels au bon fonctionnement de l'application, qui seront amenés à être modifiés et ne contenant pas de données sensibles.
