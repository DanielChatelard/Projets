
# <div style="color: #26B260">**Les variables et constantes**</div>

[Sommaire](./00-Sommaire.md)

Les variables sont déclarées par le mot-clè (let) suivi d'un nom en anglais décrivant le contenu de la variable terminé par (;).

Elles sont sensible à la casse et on la nomme en camelCase.

```javascript
    let name = "Daniel";
    let age = 25;
    age = 55;//réaffetation de la valeur de age
```

Les constantes sont déclarées avec le mot-clè (const), sa valeur ne peut pas être réaffectée car elle est constante.

```javascript
    const name = "Daniel";
    const surName = "Dan";

```

## <div style="color: #26B260">**Les types de variables**</div>

number = pour les nombres.

string = pour les chaine de caratères.

booléen = pour true ou false.

objet = pour les objets et tableaux.

typeof, permet d'affiche le type de la variable ou de la constante.

```javascript
    const name = "Daniel";
    let age = 55;
    console.log('affiche le type:', typeof name, typeof age);
```

Affichera dans la console string pour name et number pour age.

## <div style="color: #26B260">**Le +unaire**</div>

Le +unaire permet de convertir la string en nombre.

```javascript
    let unaire = "12";
    console.log('plus unaire:', +unaire, typeof +unaire);
```

pour incrémenter faire ++.

pour décrémenter faire --.

pour les puissances faire **.

```javascript
    let nombre = 2;
    let puissance = 2**2;
    console.log('puissance:', puissance, typeof puissance);
```
