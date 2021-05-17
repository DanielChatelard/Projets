
# <div style="color: #26B260">**Les classes utilities flexbox**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*.justify-content*</span> : pour modifier l'alignement des éléments flex sur l'axe principal (l'axe x ou l'axe y si flex-direction est en colonnes). Il s'agit de la propriété CSS justify-content, les valeurs sont donc les mêmes : start (valeur par défaut des navigateurs), end, center, between, ou around (ex : <span style="color: yellow">*justify-content-between*</span>.

- start, aligne le bloc au début.
- end, aligne le bloc à la fin.
- center, aligne le bloc au centre.
- between, met des espaces seulement entre les blocs.
- around, met des espaces entre les blocs, mais aussi au début et à la fin.

```html
<body>
    <div class="container">
        <div class="row justify-content-around">
            <div class="col-2">Taille 2</div>
            <div class="col-2">taille 2</div>
            <div class="col-2">taille 2</div>
        </div>
    </div>
</body>
```

<span style="color: yellow">*.justify-content-{breakpoint}*</span> : permet de spécifier un point de rupture.

```html
<body>
    <div class="container-fluid"><!--Prend toute la largeur de la page-->
        <div class="row justify-content-sm-center"><!-- sm, pour small en responsive-->
            <div class="col-2">Taille 2</div>
            <div class="col-2">taille 2</div>
            <div class="col-2">taille 2</div>
        </div>
    </div>
</body>
```

<span style="color: yellow">*.align-items-*</span> : permet de modifier l'alignement des objets flex sur l'axe secondaire (l'axe y ou l'axe x si flex-direction est en colonnes). Il s'agit de la propriété CSS align-items, les valeurs sont donc les mêmes : start, end, center, baseline, ou stretch (valeur par défaut des navigateurs). Il est également possible de spécifier un breakpoint <span style="color: yellow">*align-items-{breakpoint}*</span>.

```html
<body>
    <div class="container-fluid"><!--Prend toute la largeur de la page-->
        <div class="row align-items-start"><!-- alignement verticale d'une ligne en haut du bloc (div class ="row").-->
            <div class="col-2 align-self-end">Taille 2</div><!--alignera cette colonne en bas de la ligne (row).-->
            <div class="col-2 align-self-center">taille 2</div>
            <div class="col-2">taille 2</div>
        </div>
    </div>
</body>
```

<span style="color: yellow">*.align-self*</span> : permet de modifier l'alignement d'un objet flex en particulier sur l'axe secondaire (l'axe y ou l'axe x si flex-direction est en colonnes). Cette classe doit être affectée sur l'élément lui-même. Il est également possible de spécifier un breakpoint <span style="color: yellow">*.align-self-{breakpoint}*</span>.

```html
<body>
    <div class="container-fluid"><!--Prend toute la largeur de la page-->
        <div class="row align-items-start"><!-- alignement verticale d'une ligne en haut du bloc (div class ="row").-->
            <div class="col-2 align-self-end">Taille 2</div><!--alignera cette colonne en bas de la ligne (row).-->
            <div class="col-2 align-self-sm-center">taille 2</div><!--avec du responsive (-sm).-->
            <div class="col-2">taille 2</div>
        </div>
    </div>
</body>
```
