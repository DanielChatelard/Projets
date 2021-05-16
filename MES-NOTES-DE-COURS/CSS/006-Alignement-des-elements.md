# <span style="color:#26f260;">**L'alignement en CSS.**</span>

[Sommaire](./00-Sommaire.md)

<span style="color:#70F3EF;">text-align </span>, définit l'alignement horizontal du texte ou du contenu dans un bloc. Il existe plusieurs valeurs possibles pour cette propriété : left, right, center, justify.

```css
    div {
    text-align: justify;
    }   
```

<span style="color:#70F3EF;">vertical-align </span>, définit l'alignement vertical du texte ou du contenu dans une ligne ou dans une cellule d'un tableau.

```css
    div {
    vertical-align: center;
    }   
```

Simuler des tableaux avec les propriétés display : table et table-cell.

```css
    .conteneur {
    display: table;
    height: 200px;
    margin: 0 auto;
    width: 400px;
    margin-top: 20px;
    background: #f2f2f2;
    }

    .contenu-top {
    padding: 40px;
    text-align: center;
    display: table-cell;
    vertical-align: top;
    } 
```
