# Fusionner des branches et gérer les conflits

[Sommaire](./00-Sommaire.md)

    Les fusions (ou merges en anglais) nous permettent de récupérer des modifications apportées sur une branche sur un tronc commun. Pour cela, il faut se placer sur la branche de destination et indiquer à Git de fusionner la branche la plus à jour avec la commande git merge.

    Les fusions font partie des opérations les plus complexes avec les VCS. Heureusement, Git nous facilite grandement le travail. Cependant, quelques fois, Git ne peut pas résoudre les fusions seul et produit des conflits. Ces conflits doivent être corrigés manuellement pour finaliser la fusion des deux branches, et ainsi produire un commit de merge.

## Fusionner nos branches

```markdown
# Pour fusionner la branche daniel à la branche master, nous devons d'abord nous positionner sur la branche master, puis indiquer à Git de merger la branche daniel.

git checkout master
git merge daniel

# Résultat:
Updating 0c15bb5..06a8fb8
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

# Git nous indique qu'il est passé du commit 0c15bb5 au commit 06a8fb8 et a modifié le fichier README.md. 
# Au total, un fichier a été modifié, avec une insertion et une suppression  qui ont été effectuées.
```

## Le cas des conflits

Lorsque nous fusionnons des branches, il se peut que nous fassions face à des conflits. Ces conflits sont le résultat d'une incapacité de Git à résoudre une fusion par lui-même. Cela arrive fréquemment lorsqu'un même endroit d'un fichier a été modifié par plusieurs commits concurrents. Les conflits sont la façon qu'a Git de nous dire d'effectuer la fusion manuellement.

```markdown
# Reprenons notre premier exemple, mais en ajoutant un commit à la branche master qui modifie la même ligne du fichier README.md que la modification apportée à la branche daniel.

# Résultat de la commande git log --oneline pour master :

5d25bd2 (HEAD -> master) Une correction directement sur master
0c15bb5 Mon premier commit

# Résultat de la commande git log --oneline pour daniel :

06a8fb8 (HEAD -> daniel) Un commit sur la branche daniel
0c15bb5 (master) Mon premier commit

# Cette fois, nous voyons bien que la différence entre les deux branches est l'ajout du commit 06a8fb8 sur la branche daniel et l'ajout du commit 5d25bd2 sur la branche master.

La commande git diff master..bugfix affiche :

diff --git a/README.md b/README.md
index c548287..842be52 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,3 @@
 # Fichier README.md

-Il ne contient pas grand chose. Dommage.
+Il ne contient pas grand chose !

# Nous voyons ici qu'une ligne du fichier README.md a été modifiée de Il ne contient pas grand chose. Dommage. en Il ne contient pas grand chose !.

Nous pouvons maintenant fusionner la branche bugfix dans la branche master.

git checkout master
git merge bugfix

# Résultat:

Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.

Git nous indique qu'il a rencontré un conflit dans le fichier README.md et qu'il attend que nous résolvions le conflit, puis que nous fassions un commit. Git a en fait modifié le fichier README.md pour y faire apparaître les deux modifications. Rendons-nous dans le fichier pour voir ce qu'il se passe :
1# Fichier README.md
2
3<<<<<<< HEAD
4Il ne contient pas grand chose. Dommage.
5=======
6Il ne contient pas grand chose !
7>>>>>>> daniel
8

Les lignes 3 à 7 possèdent le détail du conflit. Ici, Git nous indique que la ligne Il ne contient pas grand chose. Dommage. provient de HEAD, c'est-à-dire de la branche actuelle master, et Il ne contient pas grand chose ! provient de la branche daniel.

À partir de là, il nous appartient de corriger le conflit nous-mêmes, puisque Git ne sait pas le résoudre seul. Nous pourrions garder l'un ou l'autre des messages, mais modifions le fichier README.md en optant pour ce contenu :

# Fichier README.md

Il ne contient pas grand chose ! Dommage !

Pour valider nos résolutions de conflit, il faut ajouter le fichier, puis faire un commit.

git add README.md
git commit

# La commande git commit va ouvrir un fichier pour indiquer le message de commit. Nous pouvons le laisser en l'état, nous reviendrons sur la signification de ce commit plus tard. Sauvegardons et fermons ce fichier, puis exécutons la commande git log --oneline.

5ebb148 (HEAD -> master) Merge branch 'bugfix'
5d25bd2 Une correction directement sur master
06a8fb8 (bugfix) Un commit sur la branche bugfix
0c15bb5 Mon premier commit

# La branche master comporte maintenant, dans l'ordre chronologique (donc de bas en haut) : le commit commun aux deux branches 0c15bb5, le commit de la branche bugfix 06a8fb8, le commit de la branche master 5d25bd2 et un commit de merge. Ce commit de merge est très important, car il contient la résolution de notre conflit.

```
