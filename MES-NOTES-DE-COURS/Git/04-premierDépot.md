# Premier Dépot

[Sommaire](./00-Sommaire.md)

    Pour pouvoir gérer les versions de nos fichiers, nous avons besoin de travailler dans un dépôt Git. On peut en créer un avec la commande git init.

    Pour créer une nouvelle version de nos fichiers, nous devons ajouter nos fichiers, puis faire un commit. On peut le faire facilement avec les commandes git add et git commit.

```markdown
# Créez un répertoire nommé 'exemple-git'
mkdir exemple-git 

# Ce placer dans ce répertoire
cd exemple-git

# Initialiser Git
git init

# Créer un fichier README.md
touch README.md

# Ajouter le fichier à Git
git add README.md

# Faire un commit avec un messsage 'Option tiret m'
git commit -m"Mon premier commit"

# Vérifier l'état de git
git status
```
