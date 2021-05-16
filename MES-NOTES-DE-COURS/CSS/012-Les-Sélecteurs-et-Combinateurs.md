
<span style="color:#26f260;">**12. Sélecteurs et combinateurs.**</span><br>
[Retour au sommaire](1-Sommaire.md)<br>

Avant de styliser un élément, il est important de le cibler en utilisant la méthode la plus juste.

Voici les principaux sélecteurs possibles et la manière de les utiliser :

Sélecteur universel : <span style="color:#ff0000;">*</span> va sélectionner tous les éléments du document.

Sélecteur d'élément : le nom de l'élément sans les chevrons va sélectionner tous les éléments de ce type.

Sélecteur par identifiant : l'attribut <span style="color:#ff0000;">id=" "</span> d'un élément va cibler l'élément possédant cet identifiant.
````css
    #id {
    color: #2cc0b4;
    font-style: italic;
    }
````
Sélecteur par classe : l'attribut <span style="color:#ff0000;">class=" "</span> d'un élément va cibler tous les éléments possédant cette classe.
````css
    .class {
    color: #2cc0b4;
    font-style: italic;
    }
````
Sélecteur d'attribut : va cibler tous les éléments possédant un attribut particulier.

Il est possible de préciser la sélection d'éléments en utilisant les combinateurs, soit en sélectionnant l'enfant direct d'un élément avec <span style="color:#ff0000;">">"</span>,
````css
    div > p {
    color: #2cc0b4;
    font-style: italic;
    }
````
soit en sélectionnant tous les enfants d'un type descendant d'un élément avec un espace blanc.
````css
    div p {
    color: #2cc0b4;
    font-style: italic;
    }
````

Il est également possible de sélectionner le voisin direct d'un élément à l'aide du <span style="color:#ff0000;">"+"</span>
````css
    div + p {
    color: #2cc0b4;
    font-style: italic;
    }
````
ou de sélectionner les voisins d'un même type grâce au <span style="color:#ff0000;">"~"</span>.
````css
    div ~ p {
    color: #2cc0b4;
    font-style: italic;
    }
````