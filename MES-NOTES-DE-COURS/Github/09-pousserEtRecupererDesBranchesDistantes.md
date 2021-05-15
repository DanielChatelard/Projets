# Pousser et récupérer des branches distantes

[Sommaire](./00-Sommaire.md)

    La représentation d'une branche locale sur le dépôt distant s'appelle l'upstream. L'upstream est composé de l'alias du dépôt distant et du nom de la branche distante, par exemple origin bugfix.

    Les commandes git push et git pull suivies de l'upstream permettent respectivement de pousser et de récupérer les modifications d'une branche.

    La commande git fetch origin permet de récupérer les branches distantes.

    La commande git push origin --delete suivie du nom de la branche distante permet de supprimer la branche du dépôt distant.

## Définir l'upstream d'une branche et la pousser

Une fois notre branche créée, nous pouvons définir son upstream. L'upstream est notre branche distante, c'est-à-dire la représentation de notre branche locale sur le dépôt distant. En effet, puisque nous travaillons en local avec Git, notre branche n'est pas disponible depuis notre dépôt distant. L'upstream est composée du remote, c'est-à-dire l'alias du serveur distant tel qu'il a été défini dans la commande git remote add, ainsi que du nom de la branche sur le dépôt distant.
