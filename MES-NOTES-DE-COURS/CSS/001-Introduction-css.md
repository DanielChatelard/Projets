
# <div style="color: #26B260">**Introduction au CSS**</div>

[Sommaire](./00-Sommaire.md)

Dans les années 2000, Hakon Wium Lie proposa un nouveau langage permettant d'habiller les sites à l'aide de propriétés : le CSS (Cascading Style Sheets, qui signifie « feuilles de style en cascade »).

````css
    /* Permet d'indiquer que l'on cible les titres h1 */
    h1 {
    /* donne l'instruction d'afficher le texte de la couleur définie, à savoir rouge */
    color: red;
        /* commentaire en CSS */
}
````

CSS est un autre langage qui vient compléter le HTML. Son rôle est de mettre en forme votre page web.

Il faut être vigilant sur la compatibilité des navigateurs avec certaines fonctionnalités récentes de CSS3. Quand un navigateur ne connaît pas une instruction de mise en forme, il l'ignore simplement.

On peut écrire le code CSS à plusieurs endroits différents, le plus conseillé étant de créer un fichier séparé portant l'extension .css  (exemple : style.css  ).

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="style.css" />
        <title>Mes cours</title>
    </head>

    <body>
        <h1>Mes notes</h1>
        
        <p>Bonjour et bienvenue sur mes notes de cours.</p>
    </body>
</html>
```

En CSS, on sélectionne une portion de la page HTML qu'on veut modifier, et on change leur présentation avec des propriétés CSS :

```css
balise
    {
    propriete: valeur;
    color: blue;
}

Exemple:

h1 {
    color: blue;
}
```

Certaines balises spécifiques, auxquelles on a donné des noms à l'aide des attributs class  ou id  ( .nomclasse  ou #nomid  ) ;

Exemple

```css
Par le nom de la classe
.nomclasse {
    color: blue;
}

Par le nom de l'id
#nomid {
    color: blue;
}
```

Appliquer un style à plusieurs balises, il faut les séparer d'une virgule.

```css
h1, p {
    color: red;
}
```

Les commentaires s'écrivent entre  /* commentaire */ , ils servent à mettre des infos sur notre code pour nous même plus tard ou les autres.
il ne sont visible que dans le code pour les développeurs, l'utilisateur du site ne les verra pas.

```css
/* ceci est un commentaire */
```

On cible la balise (em) qui se trouvent à l'intérieur de la balise (h3).

```css
h3 em {
    color: red;
}
```

Sélecteur universel, sélectionne toutes les balises sans exception (*).

```css
* {
    color: yellow;
}
```

Une balise qui suit une autre, cible la premier balise (p) située après la balise (h1).

```css
h1 + p {
    color: green;
}
```

Une balise qui possède un attribut, cible tous les liens a qui possèdent un attribut (title).

```css
a[title] {
    color: green;
}
```

```html
<a href="#" title="Infobulle">
```

A une balise, un attribut et une valeur exacte,  l'attribut doit en plus avoir exactement pour valeur « Cliquez ici ».[attribut="Valeur"] :

```css
a[title="Cliquez ici"] {
    color: gray;
}
```

A une balise, un attribut et une valeur, l'attribut doit cette fois contenir dans sa valeur le mot « ici » (peu importe sa position).
        [attribut*="Valeur"] :

```css
a[title*="ici"] {
    color: gray;
}
```

```html
<a href="#" title="Infobulle contient le mot ici">
```

[Lien vers le site du W3C, pour plus d'infos](https://www.w3.org/Style/css3-selectors-updates/WD-css3-selectors-20010126.fr.html#selectors)
