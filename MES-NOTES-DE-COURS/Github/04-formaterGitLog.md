# Formater l'affichage de Git log

[Sommaire](./00-Sommaire.md)

    L'option --pretty de la commande git log permet d'avoir le contrôle sur les résultats affichés par la commande.

    Il est possible de lui indiquer des formats prédéfinis, tels que oneline ou fuller, ou en spécifiant le format souhaité avec l'option format.

## Améliorer la lisibilité de l'historique

Lorsque le journal d'historique affiché par la commande git log devient moins lisible, il est possible d'influer sur son affichage en utilisant l'option --pretty.

```markdown
# En passant oneline à l'option --pretty de la commande git log, le résultat obtenu affiche chaque commit de l'historique sur une seule ligne. Chaque ligne contient alors l'identifiant unique du commit, la branche sur laquelle il se trouve, et son commentaire.
git log --pretty=oneline

# La commande git log --pretty=short affiche sur plusieurs lignes, pour chaque commit, son identifiant unique avec la branche concernée, le nom de l'auteur du commit et le commentaire associé.
git log --pretty=short

# L'utilisation de git log --pretty avec l'option fuller va afficher des informations supplémentaires à celles déjà présentes avec l'option short.
git log --pretty=fuller

# La commande git log --oneline affiche les résultats comme avec l'utilisation de git log --pretty=oneline, en tronquant l'identifiant des commits.
git log --oneline
```

## Formater l'affichage de l'historique

En plus de ces formatages préconfigurés, l'option --pretty peut prendre en paramètre l'option format, qui permet de définir un format de sortie personnalisé adapté aux besoins.

```markdown
# Les masques utilisés dans la commande git log --pretty=format:"%h - %an, %ad : %s" affichent un résumé de l'identifiant du commit suivi du nom de l'auteur, de la date au format date définie dans la configuration de Git, puis du commentaire du commit.
git log --pretty=format:"%h - %an, %ad : %s"

# Le formatage utilisé avec git log --pretty=format:"%h : %s" affiche une version courte des identifiants des commits et les commentaires associés.
git log --pretty=format:"%h : %s"
```
