
# <div style="color: #26B260">**Les barres de progress.**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*.progress*</span> permet d'initialiser le composant.

```html
    <!-- progress. -->
    <div class="progress">
                
    </div>
```

<span style="color: yellow">*progress-bar*</span> permet de matérialiser l'avancement de la barre de progrès. On définira sa taille grâce à la propriété CSS (width). Il est possible d'ajouter un label en l'intégrant au sein de la div intégrant cette même classe.

```html
    <!-- progress-bar. -->
    <div class="progress">
        <div
            role="progressbar"
            class="progress-bar bg-success progress-bar-striped"<!-- bg-success, couleur de la barre en vert, progress-bar-striped, la barre aura des rayures -->
            style="width: 90%;"
            aria-valuenow="9000"<!-- les attributs aria, servent pour accessibilité et les liseuses d'écran -->
            aria-valuemin="0"
            aria-valuemax="10000"
        >
            9000/1000 <!-- texte affiché dans la barre -->
        </div>
        
    </div>
```
