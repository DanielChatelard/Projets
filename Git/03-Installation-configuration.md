# Installation et configuration

[Sommaire](./00-Sommaire.md)

    Git est disponible sous tous les systèmes d'exploitation. Sous Windows, Git met à notre disposition un outil du nom de GitBash qui nous facilite la vie.

    Git est entièrement personnalisable grâce à la commande git config, et son option --global permet de définir la configuration une fois pour tous les projets.

```markdown
# Configuration de l'environnement git de l'utilisateur et son E-mail via le terminal
git config --global user.name "Prénom Nom"
git config --global user.email danielC@example.com

# Permet d'afficher la configuration de Git sur notre machine
git config --global --list
```

```markdown
# comment activer l'auto-correction de Git:
git config --global help.autocorrect 1
```

Personnalisation de Git - Configuration de Git:

[Lien vers Personnalisation de Git - Configuration de Git:](https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Configuration-de-Git)
