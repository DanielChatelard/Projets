
# <span style="color: #26B260">**functions.**</span>

[Sommaire](./00-Sommaire.md)

```typescript
    // Typage des fonctions
    
    //déclaration d'une fonction nommée
    function multiply(nb1: number, nb2: number): number {
        return nb1 * nb2;
    }
    
    // déclaration d'une fonction anonyme.
    let multiply1 = function (nb1: number, nb2: number) {
    
    };
    // On peut typer la variable pour quelle retourne un nombre.
    let multiply2:(nb1:number, nb2: number) => number;
    multiply2 = function (nb1, nb2) {
        return nb1 * nb2;
    };

    multiply(1, 2);
    multiply1(1, 2);
    
    // autres exemple:
    function createUser(name: string, age: number, adresse?: string ):{name: string, age: number, adresse: string} {
        return {
            name,// est égal à name: name,
            age,// est égal à age: age,
            adresse// est égal à adresse: adresse
        };
    }
    
    //createUser( name:'Jean', age: 12, adresse: "Bld");
```
