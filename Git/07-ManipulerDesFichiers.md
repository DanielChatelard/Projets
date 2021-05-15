# Manipuler des fichiers

[Sommaire](./00-Sommaire.md)

    La commande git restore permet de rétablir l'état d'origine d'un fichier.

    Pour retirer un fichier de la zone de transit, on peut ajouter l'option --staged à la commande git restore afin de rétablir son statut d'origine (modifié/non-suivi) sans perdre les modifications effectuées.

    Pour déplacer ou supprimer un fichier, il est préférable d'utiliser les commandes git mv ou git rm.

## Annuler les modifications effectuées sur un fichier

On l'utilise en indiquant le fichier ou répertoire ciblé, à savoir.

```markdown
git restore element_cibe.

# avant d'avoir fait git add, enleverra les modifications faites précédemment.
git restore README.md
```

## Retirer un fichier de la zone de transit

Il est possible qu'un fichier ait été ajouté à la zone de transit par erreur. Pour cela, il est possible d'utiliser la commande git restore en lui associant le paramètre --staged.

```markdown

# après avoir fait un git add, si je veux enlevé les modifications, il faudre faire un git restore README.md.
git restore --staged README.md

# Retirez ce fichier de la zone de staging sans altérer les modifications effectuées.
git restore README.md --staged
```

## Déplacer ou renommer un fichier

Lorsque l'on souhaite déplacer "proprement" un fichier ou un répertoire, il convient d'utiliser la commande git mv plutôt que de le déplacer via une simple commande.

```markdown
git mv (fichier à déplacer) (endroit où on veut le placer)

# Exemple déplacer le répertoire docs dans un répertoire nouveauxdocs:

git mv docs nouveauxdocs

# renommé le fichier source.md en sources.md, git fera automatiquement un git add, je pourrais donc faire un commit.
git mv source.md sources.md
git commit -m"rename source file"
```

## Supprimer un fichier

il est préférable d'utiliser cette commande plutôt que la commande rm.

Il est possible de supprimer un fichier de l'index de Git sans pour autant supprimer celui-ci de l'espace de travail. Cela peut s'avérer utile si un fichier a été "commité" par erreur. Pour cela, il suffit d'utiliser l'option --cached.

```markdown
git rm (fichier à supprimer)

# supprimer le fichier source.md, et ne pas oublié de faire un commit après.
git rm source.md
git commit -m"delete source file"

# On souhaite le désindexer de Git, mais qu'on désire conserver ce fichier localement :

git rm --cached README.md
```
