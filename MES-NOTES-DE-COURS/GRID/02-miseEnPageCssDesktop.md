# <div style="color: #26B260">**Mise en page CSS Desktop**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*mise de couleurs pour repérer les éléments sur la page*</div>

```css
/* mise de couleurs pour repérer les éléments */
header {
    background-color: #6cf;
}
section {
    background-color: #0c0;
}
nav {
    background-color: #000;
    color: #fff;
}
article {
    background-color: #eee;
}
footer {
    background-color: #aaa;
}
```

## <div style="color: #26B260">*Neutralisé les marges par défaut du navigateur*</div>

```css
body {
    margin: 0;
    padding: 0;
}
```

## <div style="color: #26B260">*Mise en place de la grille*</div>

```css
/* Mise en place de la grille en ciblant la class site qui est mon container*/
.site {
    display: grid;
}
```

## <div style="color: #26B260">*Mise en place des colonnes*</div>

```css
/* Mise en place des colonnes avec grid-template-columns*/
.site {
    display: grid;
    grid-template-columns: 1fr 4fr;
}
```

## <div style="color: #26B260">*Définir des noms pour mes zones avec grid area: nom de la zone;*</div>

```css
/* Définir des noms pour mes zones avec grid area: nom de la zone; */
header {
    background-color: #6cf;
    grid-area: header;/* ici */
}
section {
    background-color: #0c0;
    grid-area: section;/* ici */
}
nav {
    background-color: #000;
    color: #fff;
    grid-area: nav;/* ici */
}
article {
    background-color: #eee;
    grid-area: article;/* ici */
}
footer {
    background-color: #aaa;
    grid-area: footer;/* ici */
}
```

## <div style="color: #26B260">*Mise en place de mes zones sur la page avec grid-template-area.*</div>

```css
.site {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: 
        "header header"/* deux colonnes */
        "nav section"
        "nav article"
        "footer footer";
}
```
