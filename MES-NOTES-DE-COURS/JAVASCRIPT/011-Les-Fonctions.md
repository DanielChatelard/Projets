
# <div style="color: #26B260">Les fonctions : Déclarer une fonction.</div>

[Sommaire](./00-Sommaire.md)

Déclarer une fonction avec le mot clé (function), lui donner un nom, ouvrir des parenthèse et indiquer les arguments de la fonction (nb, nb2), ouvrir des accolades et y mettre les instruction de la fonction.

```javascript
    function multiplyBy (nb = 30, arguments) {
    console.log('nb:', nb);
    console.log('nb2:', arguments);
    
    return nb * nb2;
};
```

return, permet de retourner une donnée.

On peut mettre une valeur par défaut à un argument, en faisant (nb = 30).

Une fonction peut avoir plusieurs arguments ou aucun.

Un argument peut avoir une valeur par défaut (nb = 5, nb2)

On peut utiliser le mot clé return, pour retourner le résultat de la fonction.

## <span style="color: #26B260"> Appeler la fonction.</span><br>

Ecrire le nom de la fonction et entre les parenthèses mettre les paramètres de la fonction.

```javascript
    let produit = multiplyBy (2, 4);
    console.log('produit;', produit);
```

## <span style="color: #26B260"> Déclaration d'une fonction qui affiche les valeurs d'un tableau.</span>

```javascript
    let arr = [2, 4, 5, 14, 54, 65, 25, 32];
    console.log('tableau:', arr);
    function afficheChaquevaleur(arr) {
        for (let i=0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    };

    afficheChaquevaleur(arr);
    afficheChaquevaleur(['Jean', 'Sam', 'Jo']);
```

```javascript
    let arr = [2, 4, 5, 14, 54, 65, 25, 32];

     function afficheChaquevaleur(arr) {
        let newarr =[];
        for (let i=0; i < arr.length; i++) {
            newarr.push(arr[i] * 2);// ajouter au tableau (push).
        }
        return newarr;
    };
    console.log(afficheChaquevaleur(arr));
```

## <span style="color: #26B260">  Les fonctions : Fonction anonyme:</span>

C'est une fonction qui n'a pas de nom.

```javascript
    let fn = function (){
        return 1;
};

    fn(); // appel de la fonction anonyme fn.
    console.log(fn()); // retournera, affichera toujours 1.
```

## <span style="color: #26B260">  Les fonctions : Fonction qui s'appelle elle même :</span>

Elle est mise entre parenthèse.

```javascript
    (function (nb) {
        console.log('elle même :', nb);
    })(2);

```

## <span style="color: #26B260">  Les fonctions : Fonction callback :</span>

C'est une fonction placé en argument d'une autre fonction.

```javascript
    function maCallback(nb) {
        return nb * 3;
}

    function maFonction(nb, callback) {
    
        let var1 = nb *16;
        
        return callback(var1);
    }
    
   let res =  maFonction(6, maCallback); // maCallback sans parenthèse, on fait référence à cette fontion.

    function maCallback2(nb) {
        return maCallback(nb * 5);
    }

    console.log(res, maFonction(5, maCallback2));
```

## <span style="color: #26B260">  Les fonctions : l'objet arguments:</span>

```javascript
    function maFn() {
        console.log(arguments);
}
    maFn(1, 3, 4, 5, 6, 7, "Jean", true, null);
```

On peut aussi accéder à une valeur dans arguments avec son index (arguments[0];).

On peut test arguments (if(arguments[5] === "Sam){
alert('Vous êtes Sam');
}) à finir à 3min
