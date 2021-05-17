# <span style="color: #26B260">Le ternaire :</span>

[Sommaire](./00-Sommaire.md)

L'opérateur ternaire <span style="color: #26B260">( ? : )</span> est le seul opérateur à comporter trois opérandes. Une expression ternaire se définit la plupart du temps sur une seule ligne, et vérifie si une condition est vraie ou fausse.

```javascript
    let x = 0;
    let y = 9;
    let isEqual;

    // Cette condition...
    if (x == y) {
        isEqual = true
    } else {
        isEqual = false
    }

    // ... est équivalente à cette condition ternaire
    x == y ? isEqual = true : isEqual = false
```

```javascript
    let lastname = 'Brassens';
    let genre = 'femme';

    console.log((genre == 'femme' ? 'Mme ' : 'M ') + lastname);
```
