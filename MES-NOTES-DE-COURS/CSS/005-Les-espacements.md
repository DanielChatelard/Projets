
<span style="color:#26f260;">**5. L'espacement en CSS.**</span><br>
[Retour au sommaire](1-Sommaire.md)<br>
<span style="color:#70F3EF;">line-height</span>, donner une hauteur à une ligne.<br>
````css
    .ligne {
    line-height: 50px;
    }   
````

<span style="color:#70F3EF;">letter-spacing </span>, définit l'espacement entre les lettres d'un mot.<br>
````css
    .ligne {
    letter-spacing : 10px;
    }   
````

<span style="color:#70F3EF;">word-wrap </span>, définit la césure d'un mot.<br>
Si un mot est contenu dans un bloc d'une taille définie et que celui-ci est plus grand que la taille du bloc, on peut contrôler comment le mot en bout de ligne doit s'afficher.
````css
    .ligne {
    word-wrap : break-word;
    }   
````
Avec <span style="color:#70F3EF;">break-word </span> le texte se mettra à la ligne arrivé en bout du conteneur.
