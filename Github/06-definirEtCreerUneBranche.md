# Définir et créer une branche

[Sommaire](./00-Sommaire.md)

    Le système de branches nous permet de créer des espaces de travail distincts qui permettent de développer sans impacter le code produit sur d'autres branches.

    La commande git branch permet de lister l'ensemble des branches d'un projet Git, mais aussi de créer de nouvelles branches lorsqu'on lui passe en paramètre le nom de la branche.

    La commande git checkout permet de changer de branche en lui spécifiant le nom de la branche sur laquelle nous voulons nous placer.

    La commande git checkout -b permet de créer une branche et d'en changer en une seule fois.

## Créer une branche

```markdown
# Prenons le cas où nous nous situons sur la branche master. Pour créer une branche, il suffit de faire appel à la commande git branch, mais en lui spécifiant cette fois le nom de la branche à créer.

git branch daniel
```

```markdown
# Ici, nous créons une branche nommé daniel, à partir de la branche master. Si nous listons nos branches de nouveau avec la commande git branch, nous aurons le résultat suivant :

  daniel
* master
```

Ce que l'on voit ici, c'est que nous nous situons toujours sur notre branche master, mais que nous avons bien créé notre branche daniel.

```markdown
# Une fois la branche créée, on peut se placer sur celle-ci avec la commande git checkout en spécifiant le nom de la branche.

git checkout daniel
```

```markdown
# On peut le vérifier soit directement dans la ligne de commande, soit de nouveau grâce à la commande git branch.

* daniel
  master
```

Si nous regardons la liste de nos commits ou le contenu de nos fichiers, aucune différence ne sera notable car, à cet instant précis, les deux branches sont dans le même état.

## Créer une branche plus simplement

Nous savons comment créer nos branches avec git branch et en changer avec git checkout. Il existe cependant une commande nous permettant de faire les deux en une.

```markdown
# La commande git checkout avec l'option -b nous permet de changer de branche et de la créer à la volée. Si elle existe déjà, la commande échouera.

git checkout -b daniel
# équivaut à git branch daniel && git checkout daniel

Suite à cette commande, la branche daniel a été créée et nous nous trouvons sur elle.
```
