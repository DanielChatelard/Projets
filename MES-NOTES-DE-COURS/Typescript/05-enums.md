
# <span style="color: #26B260">**enums.**</span>

[Sommaire](./00-Sommaire.md)

```typescript
    //énumérateurs, Enums

// Création d'un type avec plusieurs constantes.
    enum Direction {
        TOP = "123",
        BOTTOM = "327",
        RIGHT = "567",
        LEFT = "234",
    }
    
    //Typer une variable
    let userDirection: Direction = Direction.TOP;

    console.log(userDirection);
```

lancer le transpiller pour tester le code

```markdown
    tsc index.ts
```

Pour éxecuter le fichier index.js dans le terminal avec node.

```markdown
    node index.js

affichera 123
```

[doc-enum](https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums)