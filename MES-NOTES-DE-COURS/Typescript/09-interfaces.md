
# <span style="color: #26B260">**interfaces.**</span>

[Sommaire](./00-Sommaire.md)

```typescript
    // Les interfaces, typer des objets ou des classes.
    // déclarer un interface avec le mot clé (interface), puis un nom et des propriété.
    interface Ivehicule {
        model: string;
        km: number;
        move(): boolean;
        marque?: string;
    }
    // variable qui va implémenter notre interface.
    let car: Ivehicule;
    car = {
        model: 'BMW',
        km: 12,
        move: function () {
            return true;
        },
        marque: "OK"
    };

```

Comment typer une fonction dans une interface.

```typescript
    // c
    interface  MyFn {
        (): boolean;
    }
    
    let myFn: MyFn = function () {
        return 
    };
```

[doc-interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)
