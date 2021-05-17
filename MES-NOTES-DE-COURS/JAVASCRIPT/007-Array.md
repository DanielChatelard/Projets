
# <div style="color: #26B260">**Array présentation.**</div>

[Sommaire](./00-Sommaire.md)

Un Array est un tableau, le premier index commence à zéro.

On peut connaitre la longueur d'un tableau avec .lenght-1.

On les utilisee pour stocker des données.

On trouvera sur le MDN Array la documentation d'un tableau.

## <span style="color: #26B260">**Créer un tableau.**</span>

On utilise des crochets et à l'intérieur on mets des valeurs séparées par une virgule.

On sauvegarde le tableau dans une constante.

```javascript
    const arr =[1, 2, 3, 4, 5];
    console.log(arr, arr.lenght);
```

arr.lenght, affiche la longueur du tableau.

Dans un tableau, on peut y mettre des chaines de caractètes, des nombres, des booléens, d'autres tableaux, la valeur null.

On peut créer un tableau aussi avec new.

```javascript
    let arr2 = new Array(10);
    arr2.fill(false);
    console.log(arr2);
```

Array(10), pour la longueur du tableau ici 10, créera 10 valeur de 10.

.fill(false), permet de remplir le tableau avec 10 fois false.

## <span style="color: #26B260">**Accéder à une valeur grâce à son index.**</span>

On accède à une valeur d'un tableau grâce à son index.

```javascript
    const arr3 = ["Sam", "Jean","Pierre"];
    console.log(arr3, arr3[0], [1, 2, 3].length);
```

arr3[0], permet d'accèder à la valeur dont la position est zéro, ici Sam si je mets 3, il affichera Pierre.

[1, 2, 3].length), affichera la longueur du tableau.

[1, 2, 3].length-1), affichera le dernier élément d'un tableau.

## <span style="color: #26B260">**Insérer une valeur dans le tableau.**</span>

.push(), insère une valeur dans le tableau, ici 600.

```javascript
    const arr3 = [];
    arr3.push(600);
    console.log(arr3);
```

il est préférable d'avoir le même type de données dans un tableau.

Par exemple, un tableau pour les noms, et un tableau pour les prix, etc....

## <span style="color: #26B260">**Supprimer ou remplacer une valeur avec la méthode " .splice() ".**</span>

```javascript
    const arr = [];
    // insérer des données
    arr.push("Jean", "Sam", "Pierre");
    console.log(arr);
    
    // supprimer des données
    arr.splice(0,1);//supprimera Jean
    console.log(arr);
    
    //supprimer tout les éléments à partir de 
    arr.splice(1, arr.length);//supprimera tout les éléments à partir de Sam, jusqu'à la fin du tableau.
    console.log(arr);

    // remplacer un élément
    arr.splice(1,1, "Samy");// supprimera "Sam" pour le remplacer par "Samy"
    console.log(arr);
```

start:0, est la position de l'élément à supprimer ici 0, avec -1 on supprime le dernier élément.

deleteCount: 1, est le nombre d'élément à supprimer ici 1.
