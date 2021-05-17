
# <div style="color: #26B260">Function arrow</div>

[Sommaire](./00-Sommaire.md)

Déclarer une fonction fléchée.

```javascript
    // fonction fléchée
function maFonction(nb) {
    console.log(this);// this fait référence à l'objet dans laquelle la fonction est éxécutée, ici window.
    return nb;
}

// Déclaration de la fonction fléchée.

let maFn = (nb) => {
    console.log(this);
    return nb;
};

// appel des fonctions.
console.log('MaFonction :', maFonction(1)) ;
console.log('maFn :', maFn(2)); // raccourci, maFn(2).log, puis tab.Donnera console.log(maFn(2));


let user = {
    name: 'Jean',
    notes: [12, 14, 15],

    // méthode.
    getNotes: function () {
        // context parent
        console.log(this);// this fait référence à l'objet dans laquelle la fonction est éxécutée, ici user, this parent de la fonction fléchée en dessous..
        //this.notes.forEach(function (note) {
        //    console.log(this);// fait référence à la fenêtre (window)
        //    console.log(this.name + ' a eu ' + note);// je n'ai pas accès à la propriété name, pour avoir accès à l'objet parent, il faut faire une fonction fléchée.


        this.notes.forEach((note) => {// grâce à la fonction fléchée, on peut accéder aux propriété de la fonction callback.
            console.log('forEach :', this);// fait référence à la fenêtre (window)
            //context enfant
            console.log(this.name + ' a eu ' + note);// la fonction fléchée va lié le this du contexte parent au this de la fonction.
        });

        /* Ne fonctionne pas sur toutes les méthodes, le plus simple est d'utiliser une fonction fléchée.
        // en mettant un deuxième argument d'une fonction callback.
        this.notes.forEach(function (note)  {
            console.log('For :', this);
            //context enfant
            console.log(this.name + ' a eu ' + note);
        }, this);// en passant le this en deuxième argument, j'ai accès à la propriété name.



        this.notes.forEach(function (note)  {
            console.log('For :', this);
            //context enfant
            console.log(this.name + ' a eu ' + note);
        }, {name: "OK"});// en passant OK via la propriété name, name sera égal à OK.
    }*/

// éxécution de la méthode getNotes à travers l'objet (user).
user.getNotes();
},
};
```
