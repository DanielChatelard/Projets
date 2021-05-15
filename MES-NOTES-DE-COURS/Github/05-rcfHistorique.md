# Rechercher, comprendre et filtrer l'historique

[Sommaire](./00-Sommaire.md)

    La commande git log permet d'afficher sous la forme d'un graphique les arborescences des branches contenues dans l'historique.

    Il est possible d'effectuer des recherches limitant le nombres de commits affichés avec certaines options.

    On retrouve des options telles que --since pour les recherches sur la date, --author pour filtrer un auteur, ou encore -S pour rechercher les commits dont les modifications contiennent une chaîne de caractères à préciser.

## Représenter graphiquement l'historique des modifications

Pour faciliter la compréhension de l'imbrication des différentes branches et des commits qu'elles contiennent au sein de l'historique d'un projet, la commande git log propose l'option --graph.

Celle-ci va afficher l'historique sous la forme d'un graphique représentant les branches existantes et les commits sur chacune d'entre elles.

```markdown
# La commande git log --graph --pretty=format:"%h : %s" affiche l'arborescence des branches et, pour chacun des commits, son identifiant au format court et le commentaire qui lui est associé.
git log --graph --pretty=format:"%h : %s"
```

## Rechercher dans l'historique

La commande git log offre la possibilité de réduire les résultats affichés en fonction de paramètres limitants.

Il existe par exemple l'option --since pour rechercher des commits en fonction de leur date, --author pour effectuer une recherche selon l'auteur des commits, ou -S pour n'afficher que les commits dont les modifications contiennent une chaîne de caractères donnée.

```markdown
# La commande git log --since=yesterday --pretty=format:"%h : %s" affiche tous les commits depuis la veille, et les formate pour n'afficher que leur identifiant au format court et leur commentaire.
 git log --since=yesterday  --pretty=format:"%h : %s"

 # La commande git log --since=2.days --pretty=format:"%h : %s" affiche les commits dans le même format que précédemment, mais affiche tous les commits jusqu'à deux jours en arrière.
git log --since=2.days  --pretty=format:"%h : %s"

# La commande git log -SHello -p affiche les commits dont les modification contiennent la chaîne de caractères Hello et affiche les informations par défaut des commits, puis montre le détail des modifications qu'ils contiennent.
git log -SHello -p
```
