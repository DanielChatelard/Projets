
<span style="color:#26f260;">**14. Pseudo-éléments.**</span><br>
[Retour au sommaire](1-Sommaire.md)<br>

Il est possible de sélectionner une certaine partie d'un élément grâce aux pseudo-éléments : le style ne s'appliquera pas à l'élément entier, mais seulement à la partie de l'élément ciblée.<br>
<span style="color:#26f260;">*::after*</span> permet de créer un élément interne juste après l'élément sélectionné. Il faut associer la propriété CSS content à ce pseudo-élément pour ajouter des éléments, comme une icône qui va suivre un lien pour indiquer qu'il est externe au site. Attention, le contenu de ce pseudo-élément n'est pas sélectionnable par l'utilisateur.

<span style="color:#26f260;">*::before*</span> pareil que <span style="color:#26f260;">*::after*</span>, mais pour <span style="color:#26f260;">*::before*</span> l'élément créé précédera l'élément sélectionné.

<span style="color:#26f260;">*::first-line*</span> permet de sélectionner la première ligne d'un paragraphe.

<span style="color:#26f260;">*::first-letter*</span> sélectionne la première lettre d'une phrase.

Ces pseudo-éléments s'utilisent après le sélecteur souhaité, suivi de "::pseudo-élément".
````css
    p::first-letter {

    }
````
