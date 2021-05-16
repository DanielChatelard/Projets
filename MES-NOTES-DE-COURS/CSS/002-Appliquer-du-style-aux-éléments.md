# <span style="color:#26f260;">**Appliquer du style aux éléments**</span>

[Sommaire](./00-Sommaire.md)

<span style="color:#26f260;">Style interne (balise style)</span>

Pour appliquer du style à un élément HTML, on peut placer le code CSS dans une balise <span style="color:red;"><**style**></span> située dans l'en-tête <span style="color:red;"><**head**></span>.

Cela va permettre de définir un style interne à la page.

```html
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <title>Titre</title>
            <meta charset="utf-8" />
            <style>
                /* Nous ajouterons le style CSS ici */
            </style>
        </head>
        <!-- commentaire en HTML -->
    </html>
```

<span style="color :#26f260;">Style inline</span>

Il existe une autre manière d'appliquer du style CSS en déclarant le style dans l'attribut <span style="color :#26f260;">Style (style=" ")</span> d'un élément HTML, et en donnant les propriétés souhaitées dans cet attribut. Il s'agit d'une déclaration de style dite inline.
Mais c'est une mauvaise pratique.

<span style="color:#26f260;">Style externe.</span>

Créer un fichier css, appelé style.css pratique conseillé.
Lié le fichier css au fichier html avec la balise <span style="color :red;">**link**</span> <span style="color :#26f260;"> rel="stylesheet" href="style.css"></span> pour importer
le fichier (style.css), qui permet de styliser le html.

```html
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <title>Titre</title>
            <meta charset="utf-8" />
            <!-- lié le css au html -->
            <link rel="stylesheet" type="text/css" href="style.css">
        </head>        
    </html>
```

<span style="color:#26f260;">h1</span> est le sélecteur.

```css
     h1 {
        color: red;
        /* commentaire en CSS */
}
```

<span style="color : #70F3EF;">color</span> = propriété, <span style="color :lightgreen;">red ou #ff0000 </span> = valeur de la propriété (couleur du texte en rouge).
