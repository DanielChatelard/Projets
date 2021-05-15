# Utiliser des branches

[Sommaire](./00-Sommaire.md)

La commande git branch -m permet de modifier le nom d'une branche, tandis que la commande git branch -D permet de la supprimer.

## Renommer une branche

Pour renommer une branche, il faut utiliser la commande git branch avec l'option -m (ou --move) suivie du nom de la nouvelle branche. Cela nous permet, par exemple, de corriger une faute de frappe dans le nom de la branche.

```markdown
# Renommons la branche daniel en patrick :
git branch -m patrick
```

## Supprimer une branche

La commande git branch sert aussi à supprimer des branches. Une fois notre développement terminé, ou simplement parce que nous avons créé une branche qui n'a plus d'utilité, nous voudrons la supprimer.

Pour cela, rien de plus simple, la commande git branch accepte une option -d pour supprimer une branche si celle-ci a déjà été fusionnée.

Il faudra se positionner sur une autre branche que celle que nous souhaitons supprimer, sinon la commande échouera.

```markdown
# Attention
Si l'on souhaite supprimer une branche qui n'a pas été fusionnée, il est possible d'utiliser la commande git branch -D, ce qui permet de forcer la suppression.

Attention cependant, car si nous supprimons une branche, nous ne pourrons plus la récupérer.
```

```markdown
# La branche patrick a été fusionnée, on souhaite désormais la supprimer :

git branch -d patrick

La branche est instantanément supprimée et n'apparaît plus dans la liste des branches.
```
