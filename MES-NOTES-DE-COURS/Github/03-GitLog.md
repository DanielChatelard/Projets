# Usage basiques de git log

[Sommaire](./00-Sommaire.md)

    La commande git log permet de visualiser la liste des commits présents sur la branche en cours, du plus récent au plus ancien.

    Il est possible de lui passer l'option -p pour afficher les modifications apportées par chaque commit, ainsi que l'option --stat afin d'en obtenir un affichage plus concis.

    L'option -{n} ,où n précise le nombre de commits à afficher, quant à elle limite l'affichage de l'historique au nombre de commits souhaités.

## Afficher l'historique des modifications

La commande git log permet d'afficher les commits sur la branche courante en les ordonnant du plus récent au plus ancien.

L'affichage des résultats présente, pour chaque commit, sa somme de contrôle SHA-1, ainsi que la branche sur lequel il est positionné, son auteur, sa date et son commentaire.

```markdown
# L'utilisation de la commande git log affiche tous les commits de la branche, du plus récent au plus ancien.
git log
```

## Afficher l'historique et le détail de toutes les modifications

Pour certains cas d'application, consulter la liste des commits peut ne pas suffire à couvrir l'ensemble des besoins. Il peut par exemple être nécessaires de visualiser directement le détail des modifications apportées par les commits précédents.

Pour obtenir cette information, la commande git log dispose de l'option -p.

Cette option permet de cumuler l'utilisation de la commande git log et de la commande git diff, appliquées à chaque commit obtenu.

```markdown
# L'utilisation de la commande git log -p présente pour chaque commit les éléments modifiés en préfixant par - les suppressions, et par + les ajouts.
git log -p
```

## Afficher l'historique et un résumé des modifications

Si l'affichage détaillé des modifications réalisées par chaque commit est trop conséquent pour être lisible, git log offre la possibilité d'en résumer le contenu grâce à la commande --stat.

Cette option permet de visualiser rapidement le nombre de modifications intervenues sur chaque fichier concerné par chaque commit.

```markdown
# L'utilisation de git log --stat permet de visualiser de manière concise les modifications réalisées dans chaque commit.
git log --stat
```

## Limiter le nombre de commits affichés

Avec le temps, le nombre de commits présents sur une branche peut devenir trop important pour rendre celui-ci lisible.

Il est possible de spécifier à la commande git log un nombre de commits auxquels remonter avec l'option -{n}, où n est le nombre de commits souhaités.

```markdown
# L'utilisation de git log -2 affiche les deux derniers commits présents sur la branche.
git log -2

# Il est possible de cumuler les différentes options à la commande git log pour une meilleure gestion de son affichage.
En cumulant l'option -p et -{n} à la commande git log, l'historique des modifications apportées par les deux derniers commits est affiché.
git log -p -2
```

## Définir des alias

Il peut être fastidieux, lorsque l'on travaille avec Git, de devoir se rappeler ou de saisir entièrement des commandes régulièrement utilisées.

Heureusement, Git offre la possibilité de créer des alias, ce qui permet de ne devoir taper qu'une commande plus courte pour réaliser l'action souhaitée.

Pour cela, il faut utiliser la commande git config --global alias.{nom_alias} {commande_git}.

```markdown
# La commande git config --global alias.logmodif 'git log -p' crée un alias global dans la configuration de Git nommé logmodif et renvoyant à la commande git log -p.

# L'utilisation de git logmodif affiche bien les détails des modifications effectuées au sein de chaque commit.
git config --global alias.logmodif 'log -p'
git logmodif
```
