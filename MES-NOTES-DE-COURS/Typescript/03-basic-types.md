
# <span style="color: #26B260">**Basic types.**</span>

[Sommaire](./00-Sommaire.md)

```typescript
    let a = 3;//Typage dynamique en javascript.

    // Typage en typescript d'un nombre.
    let b: number = 3;// ici on a typé la variable en number.

    // Typage d'une chaine de caractère.
    let str: string;
    str ="OK";
    
    // typage d'un booléen.
    let bool: boolean = true;
    bool = false;
    
    // Typage par soit un nombre, soit une chaine de caractère.
    let nb: number | string = 3;
    // ou un tableau ou etc...
    let nb1: [] | string | boolean;
    
    // On peut typer un tableau, en number, string ou booléen.
    let arr: number[];
    arr = [];
    arr.push(true);
    
    // Typer un objet.
    let obj: {
        name: string,
        age?: number | string};// ? pour optionnel
    obj = {name: "Jean", age: "12"};
```
