
# <div style="color: #26B260">Spread operator</div>

[Sommaire](./00-Sommaire.md)

Le spread operateur se sont les trois petit point(...) qui veut dire étaler.

Utilisé très souvent.

```javascript
    // Spread Operator
    let arr1 = ["Jean", "Sam", "Tom"];
    let arr2 = ["Pauline", "Lise", "Eloïse"];
    
    let arr3 = [...arr1, ...arr2]//permet d'étaler, arr3 contient les valeurs du tableau arr1 et arr2.
    
    console.log(arr3);
```

ils peuvent être utilisé aussi dans des objets.

```javascript
    // Spread Operator
    let studentDefault = {
        name: "Jean",
        class: null,
    };
    let student = {
        ...studentDefault,
        name: "Sam", // écris Sam dans name, permet de modifié une valeur.
        presence: true // rajoute une propriété.
    };
    console.log(student.name);
```

il ne faut jamais copié un tableau directement, sinon se sera par référence et les valeurs du tableau original seront modifiés.

A la place , on utilise le Spread Operator pour copié les valeurs du tableau d'origine, ou de l'objet que l'on veux copié.

```javascript
    // Spread Operator sur un objet.
    let studentDefault = {
        name: "Jean",
        class: null,
    };
    let student = {
        ...studentDefault,
        name: "Sam", // écris Sam dans name, permet de modifié une valeur.
        presence: true // rajoute une propriété.
    };
    let student2 = {...student};// je fais une copie de student.
    
    student2.name = 'lise';// ensuite je peut modifié le name dans student2, cela n'affectera pas la valeur dans student.
    console.log(student.name);
```

```javascript
    // Spread Operator sur un tableau.
    let arr1 = [1, 3];
    let arr2 = arr1; // ici on copié les données par référence(danger).
    arr2.push(5);// affectera(modifiera) arr1 et arr2.
    
    let arr2 = [...arr1];// créera une copie de arr1.(conseillé).
    arr2.push(5);// modifiera arr2 mais pas arr1.

    console.log(arr1, arr2);
    
    // on peut l'utilisé plusieurs fois.
    let arr =[1];
    let arr1 =[2];
    let arr2 =[3];
    let arr3 =[4];
    
    let arr4 = [...arr, ...arr1, ...arr2, ...arr3];
    console.log(arr4);// affichera un tableau avec les valeurs des autres tableaux.

    // même chose pour les objets.
    let obj = {a: 1};
    let obj1 = {a: 2};
    let obj2 = {...obj, ...obj1};
```
