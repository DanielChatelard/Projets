# Travailler avec un dépot distant

[Sommaire](./00-Sommaire.md)

    Travailler avec un dépôt Git distant implique de toujours récupérer la dernière version du projet grâce aux commandes git fetch et git merge ou git pull, avant de pousser ses propres modifications locales vers le dépôt distant grâce à la commande git push.

    Lorsque l'on travaille sur un projet existant, il faut utiliser la commande git clone pour récupérer le projet localement : de cette manière, un dépôt local automatiquement lié au dépôt distant est créé.

## Récupérer le code distant

Git propose deux commandes permettant de récupérer les données stockées dans le dépôt distant : git fetch et git pull.

## La commande git fetch

La commande git fetch compare l'état du projet local et récupère tous les commits manquants de la branche courante depuis le dépôt distant.

Cette commande ne télécharge pas les fichiers modifiés, mais uniquement les metadata permettant de connaître les différences existantes.

De cette manière, il est possible d'être informé des modifications à venir et de ne décider de les intégrer, avec la commande git merge, qu'après s'être assuré qu'elles n'auront pas d'impact sur les développements en cours.

```markdown
# L'utilisation de la commande git fetch récupère les informations liées à la branche exemple_fetch_branch présente sur le dépôt distant, mais aucune modification réelle du projet local n'a été effectuée.
git fetch

# La commande git merge va quant à elle intégrer localement les modifications présentes sur le dépôt distant.
git merge
```

## La commande git pull

La commande git pull permet d'effectuer les commande git fetch et git merge en une seule fois.

Ainsi, lorsque git pull est effectuée, les modifications présentes sur le dépôt distant sont immédiatement intégrées au projet local.

```markdown
# L'utilisation de la commande git pull a bien récupéré et intégré localement les modifications existantes sur le dépôt distant.
git pull
```

## La commande git push

Une fois les développements d'une branche terminés, il faut mettre à jour le dépôt distant afin que les autres membres de l'équipe puissent récupérer les modifications apportées.

Pour cela, il va falloir pousser les commits réalisés en local vers le dépôt distant grâce à la commande git push.

Cette commande prend en paramètres le nom du dépôt distant suivi du nom de la branche cible à mettre à jour.

```markdown
# La commande git push envoie les modifications locales vers le dépôt distant nommé origin et met à jour la branche exemple_pull_branch.
git push origin exemple_pull_branch
```

## La commande git clone

```markdown
va automatiquement créer un dépôt Git local lié au dépôt distant.
git clone git@github.com:JohnDoeDemo/repository-exemple.git
```

## Naviguer dans Github

    L'utilisation d'outils comme GitHub permet d'avoir accès à une interface web complète.

    Il est possible de naviguer à travers les branches et commits existants, ainsi que de visualiser le contenu des fichiers en fonction de leur état dans la branche choisie.
