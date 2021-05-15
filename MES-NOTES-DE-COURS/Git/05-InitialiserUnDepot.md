# Initialiser un dépot Git

[Sommaire](./00-Sommaire.md)

## Initialiser un nouveau dépôt

Pour initialiser un nouveau dépôt, par exemple dans le cadre d'un nouveau projet, il suffit de se placer dans le répertoire qui contiendra les sources de ce projet et d'exécuter la commande git init.

Lorsque cette commande est exécutée, un nouveau répertoire .git est créé. Celui-ci contient l'ensemble des éléments nécessaires au bon fonctionnement d'un dépôt Git.

## La branche par défaut

Git est basé sur un système de branches. Par défaut, lorsqu'un nouveau dépôt est initialisé, une nouvelle branche est automatiquement créée, intitulée main.

## Cloner un dépôt existant

Ainsi, pour récupérer le projet sur son environnement local, il conviendra de disposer de l'URL de son dépôt distant, une fois cette URL récupérée, il convient de se placer dans son répertoire de travail et d'exécuter la commande git clone [url].

```markdown
git clone url.git
```

Un répertoire sera alors créé automatiquement. Celui-ci sera par défaut nommé de la même façon que dans le répertoire distant.

Si l'on souhaite configurer un autre nom, il convient de l'indiquer au moment de la commande git clone [url] [nouveau_nom].

```markdown
git clone url.git nouveau_nom
```
