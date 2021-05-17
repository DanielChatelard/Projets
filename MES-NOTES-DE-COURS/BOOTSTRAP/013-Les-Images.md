
# <div style="color: #26B260">**Les images.**</div>

[Sommaire](./00-Sommaire.md)

Pour rendre une image responsive, Bootstrap 4 propose une classe :
<span style="color: yellow">*.img-fluid*</span>. la taille de l'image s'adaptera à la taille de l'écran, sauf si l'image est plus petite que l'écran.

```html
    <div>
        <img src="#" class="img-fluid">
    </div>
```

Changer l'apparence des bordures des images :
<span style="color: yellow">*.img-thumbnail*</span> : affecte un liseré autour de l'image, effet de cadre.

```html
    <div>
        <img src="#" class="img-thumbnail">
    </div>
```

<span style="color: yellow">*.rounded*</span> : arrondit les coins de l'image.

```html
    <div>
        <img src="#" class="rounded">
    </div>
```

<span style="color: yellow">*.rounded-top*</span>, <span style="color: yellow">*.rounded-bottom*</span>, <span style="color: yellow">*.rounded-left*</span>, <span style="color: yellow">*.rounded-right*</span> : arrondissent les coins à l'emplacement défini par la classe.

<span style="color: yellow">*.rounded-circle*</span> : permet d’afficher l'image dans un cercle.

```html
    <div>
        <img src="#" class="rounded-circle">
    </div>
```
