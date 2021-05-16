# <div style="color: #26B260">**2. Les Balises principales.**</div>

[Sommaire](./00-Sommaire.md)

1) <span style="color: #3ec6c4"><**!DOCTYPE**<span style="color: #3ec669"> **html**</span>></span>, dit au navigateur qu'il va lire du HTML5, à mettre en premier.

```html
<!DOCTYPE html>
```

2) <span style="color: red"><**html**></**html**></span> Elle déclare le début du document, tout le code sera écris entre ces balises.

```html
<!DOCTYPE html>
   <html lang="fr">
      
   </html>
```

On peut ajouter des attributs aux balises, qui permettront de préciser des comportements.<br>
<span style="color: lightgreen">-*lang*</span> est l'attribut pour spécifier la langue de la page.  
<span style="color: yellow">-*fr*</span> est la proprièté, pour dire que la page est en français.

3) <span style="color: red"><**head**></**head**></span> balise d'en-tête, on y met les métadonnées, elles ne seront pas visible sur le site.

```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">pour reconnaître tout les caractères accentués.
    </head>
</html>
```

4) <span style="color: red">**l'indentation**</span>, de manière générale on décale vers la droite les balises qui se trouve entre d'autres balises, pour
   une meilleurs visibilité du code.


5) <span style="color: red">**title**</span>, définit le titre de la page et sera afficher dans l'onglet du navigateur, très utile pour le référencement.

```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Nom de la page dans l'onglet du navigateur</title>
    </head>
</html>
```

6) <span style="color: red">**Les métadonnées dans l'en-tête.**</span>  
   l'attribut <span style="color: lightgreen">*charset*</span>, définit l'encodage du document, en général on met (<span style="color: yellow">*utf-8*</span>).

```html
<!DOCTYPE html>
<html lang="fr">
   <head>
       <meta charset="utf-8"/> permet d'encoder correctement toutes les langues.
       <title>Nom de la page</title>
   </head>
</html>
```

-La balise <span style="color: red"><**meta**/></span> est auto-fermante.
