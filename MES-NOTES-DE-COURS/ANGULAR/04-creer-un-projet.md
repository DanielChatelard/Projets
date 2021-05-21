# <div style="color: #26B260">**Créer un nouveau projet**</div>

[Sommaire](./00-Sommaire.md)

## <span style="color: #26B260">*créer un nouveau projet avec la commande 'ng new'*</span>

Créer un dossier pour mettre votre projet, puis allez dans ce dossier.
Tapez dans le terminal, la commande suivante:

```markdown
# Créer un dossier nommé projet-Angular par exemple
mkdir projet-Angular

# Ce positionner dans le dossier mon-projet
cd projet-Angular

# Mettre à jour npm
npm install -g npm@latest

# Installer Angular/cli
npm install -g @angular/cli
```

```markdown
# Création du projet mon-projet avec la commande (ng new nom-du-projet)
ng new mon-projet
```

### <span style="color: #26B260">*Installer boostrap*</span>

```markdown
# Installer dans le projet boostrap avec la commande (npm install bootstrap --save)
npm install bootstrap --save

# Téléchargera bootstrap et l'intégrera dans la package.json du projet.
```

Ouvrir le fichier angular.json du projet.
Dans "architect/build/options", modifiez l'array 'styles'

```javascript
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.css",
    "styles.scss"
]
```

### <span style="color: #26B260">*Installer rxjs*</span>

```markdown
# Installer rxjs avec la commande (npm install rxjs-compat --save)
npm install rxjs-compat --save

rxjs, pour la compatibilité des observables
```

### <span style="color: #26B260">*Lancer le serveur*</span>

```markdown
# Lancer le serveur avec la commande (ng serve)
ng serve

# Pour arrêter le serveur tapez Ctrl + C

# Ouvrir le navigateur à l'adresse localhost:4200, pour voir l'application.
```
