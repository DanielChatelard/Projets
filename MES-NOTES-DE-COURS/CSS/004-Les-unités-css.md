<span style="color:#26f260;">**4. Les unités en CSS.**</span><br>
[Retour au sommaire](1-Sommaire.md)<br>

<span style="color:#26f260;">*Unité px.*</span><br>
C'est une unité absolue, utilisée pour définir une longueur, largeur, un padding, une margin, la taille d'un texte.<br>
````css
    .parent {
    font-size: 18px;
}
````
Les unités absolues : ne dépends d'aucune autre dimension du contenu HTML.<br>

Les unités relatives : vont varier en fonction des dimensions de l'élément HTML parent.

<span style="color:#26f260;">*Unité en em.*</span><br>
C'est une unité relative. Elle permet de définir la taille d'un texte de façon proportionnelle à son élément parent.
````css
    .enfant {
    font-size: 2em;
}
````
La dimension du texte contenu avec la class « enfant » est égale à celle du parent multipliée par 2, soit (18px * 2) = 36 px.

<span style="color:#26f260;">*Unité en rem.*</span><br>
C'est une unité relative. Elle fonctionne de la même manière que l'unité em, sauf qu'elle n'est pas proportionnelle à son élément parent, mais à l'élément racine HTML.<br>
Si la police de l’élément HTML est définie à 16 px, 1 rem sera équivalent à 16 px pour tous les éléments du document.
````css
    html {
    font-size: 20px;
    }

    div#premier {
    font-size: 0.5rem; //10px
    }
````
La balise div ayant pour id respectif premier a une taille définie en rem, elle sera donc proportionnelle à la taille de la balise racine (20 px).

0.5 rem correspond donc ici à 10 px.

<span style="color:#26f260;">*Unité vw (viewport width).*</span><br>
C'est une unité relative proportionnelle à la largeur de la fenêtre d'affichage du navigateur. 1 vw est égal à 1 % de la largeur de la fenêtre.
````css
    div#premier {
    font-size: 10vw; //10 % de 1000 px, soit 100 px
    }

    div#second {
        font-size: 5vw;// 5 % de 1000 px, soit 50 px
    }
````
Si la largeur de la fenêtre est de 1000 px.<br>
Le texte contenu dans la première div sera 10 % de 1000 px, soit 100 px.<br>
Le texte contenu dans la deuxième div sera 5 % de 1000 px, soit 50 px.<br>

<span style="color:#26f260;">*Unité vh (viewport height).*</span><br>
C'est une unité relative proportionnelle à la hauteur de la fenêtre d'affichage du navigateur.<br>
1 vh est égal à 1 % de la hauteur de la fenêtre. Les calculs seront les mêmes qu'avec vw, mais en se basant sur la hauteur de la fenêtre au lieu de la largeur.<br>

