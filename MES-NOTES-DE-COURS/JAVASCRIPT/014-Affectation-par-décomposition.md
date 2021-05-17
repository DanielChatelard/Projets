
# <div style="color: #26B260">Affecter par décomposition</div>

[Sommaire](./00-Sommaire.md)

```javascript
    //Affecter par décomposition

    let a, b;// déclaration des variables
    let arr = [1, "J"];
    // Assignation de arr aux variables a et b.
    [a, b] = arr;// on affecte a et b en décomposant le tableau arr.
    console.log(a);// a, aura 1
    console.log(b);// b, aura "j"

    // si mon tableau a plus de données.
    let a, b, rest;// déclaration des variables
    let arr = [1, "J", true, 'Bonjour'];
    // Assignation de arr aux variables a, b et rest.
    [a, b, ...rest] = arr;// ...rest, étalera les données à la suite.
    console.log(a);// a, aura 1, première valeur du tableau
    console.log(b);// b, aura "j"deuxième valeur du tableau.
    console.log(rest);// rest affichera, true et 'Bonjour'.

    // Affectation avec déclaration.
    const [a, b, ...rest] = [1, 2, 3, 4, 5];
    console.log(a);// a, aura 1
    console.log(b);// b, aura 2
    console.log(rest);// rest affichera, 3, 4, 5.

    // Affecter à partir d'un autres objet.
    let name;    
    ({name} = {name: "Jean"});// mettre entre parenthèse, décomposition par le nom de la clé (name:).
    console.log('name :', name);
    
    // ou aussi
    let name, age;
    let student = {name:'Jean',class: "B", age: 20};
    ({name, age} = student);// ici il n'y a pas d'ordre, on récupère les clés que l'on demande (name et age).
    
    console.log('name :', name, age);

    // ou aussi    
    let student = {name:'Jean',class: "B", age: 20};
    let {name, age} = student;// ici pas besoin des parenthèses, car on la déclare directement une variable name et age en décomposants l'objet student.
    name = 'Tom';
    console.log('name :', name, age, student);
    
    // renommer une propriété 
    let student = {name:'Jean',class: "B", age: 20};
    let {name: nom, age} = student;// name: nom, pour renommer la clé name par nom.

    let student = {name:'Jean',class: "B"};
    let {name: nom, age = 20} = student;
    // age = 20,mettra 20 par défault dans age si age n'est pas définit dans student.
    
    console.log('name :', nom, age, student);
    
```
