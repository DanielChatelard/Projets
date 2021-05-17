
# <div style="color: #26B260">Manipuler le dom : S'assurer que le dom est chargé "static"</div>

[Sommaire](./00-Sommaire.md)

```javascript
    // première moyen de savoir si le Dom est chargé avant de le manipuler.
    window.onload = function () {
        console.log('4');
        console.log(document.querySelector('h1'));
    };

    // deuxième façon
    window.addEventListener('DOMContentLoaded', function () {
        console.log('5');
        console.log(document.querySelector('h1'));
    })
```

## <span style="color: #26B260"> Manipuler le dom : Sélectionner un élément grâce à son id</span>

```javascript
    //cibler un id
    const square = document.getElementById('sqr');
    console.log(square);// affichera: <div id = "sqr" ></div>
```

les (id) ont les utilise principalement pour manipuler les éléments avec du javascript.
Cette méthode renvoie l'élément du DOM qui possède l'id = 'sqr'.

```javascript
    //cibler une class
    const squares = document.getElementsByClassName('square');
    console.log(squares);
```

Cette méthode renvoie la liste des éléments du DOM ayant pour attribut class="square".

## <span style="color: #26B260">Manipuler le dom : Sélectionner des éléments grâce à leurs classes</span>

```javascript
    // 
    const square = document.querySelector('.square');// nommé la class avec un point.
    
    console.log(square);
    
```

## <span style="color: #26B260">Manipuler le dom : Sélectionner un ou des éléments</span>

```javascript
    // 
    const square = document.querySelector('.square.bigSquare');// pour plusieurs class, les mettre à la suite.
    const square = document.querySelector('#sqr');// pour l'id
    const square = document.querySelector('section');// avec le nom du tag (balise).
    const square = document.querySelectorAll('section');// rechercher plusieurs éléments avec le nom du tag (balise section).
    console.log(square);    
```

## <span style="color: #26B260">Manipuler le dom : Manipuler le style d'un élément</span>

```javascript
    // modifié un élément
    // 1er je le sélectionne.
    const square = document.querySelector('.square');
    // je m'assure qu'il est bien sélectionné.
    console.log(square);
    // je modifié son style.
    square.style.backgroundColor = 'yellow';
    square.style.border = '1px solid grey';
    // modifié sa position.(fixée à 200px du top(haut).
    square.style.position = 'fixed';
    square.style.top = "10px";
    console.log(square);
    
    
    // avec un interval de temps.
    let positionY = 0;// vertical
    
    setInterval(function () {
        positionY++;
        square.style.top = positionY + "px";
    }, 2000 );// 2000 ms égal 2 secondes.

    let positionX = 0;// horizontal
    
    setInterval(function () {
        positionX++;// ou, position = position + 10;
        square.style.left = positionX + "px";
    }, 100 );// 100 ms égal 0.1 secondes.
    console.log(square);
    
    // changer la couleur après un temps donné.
    let i = 0;
    setInterval(function () {
         square.style.backgroundColor = i % 2 ? 'red' : 'yellow';
         i++;
    }, 1000 );// 1000 ms égal 1 secondes.
    
```

## <span style="color: #26B260">Manipuler le dom : Manipuler les classes d'un élément</span>

```javascript
    // récupérer l'élément.
    const square = document.querySelector('.square');
    console.log(square);
    
    let i = 0;
    setInterval(function () {
        if (i % 2) {
            square.classList.add('bigSquare');// ajoute la class (bigSquare).
        } else {
            square.classList.remove('bigSquare');// supprime la class (bigSquare).
        }
        i++;
    }, 1000);
```

## <span style="color: #26B260">Manipuler le dom : Créer et ajouter au dom un élément</span>

```javascript
    // créer un élément
    const square = document.createElement('section');

    // ajouter une class square.
    square.classList.add('square');
    
    // ajouter l'élément dans notre page.
    document.body.appendChild(square);
    
    // créer un nouvel élément.
    let container = document.createElement('div');
    
    // ajouter l'élément dans mon body.
    container.innerText = 'container';// ajout d'un texte.
    document.body.appendChild(container);
    
    // ajouter un enfant à container.
    container.appendChild(square);
    
    console.log(square);
```

Ajouter du texte ou une balise html :

```javascript
    // ajouter du texte à notre élément.
    square.innerText = 'ok';
    // insérer du html dans un élément, il serra considéré comme un enfant de votre élément.
    square.innerHTML = '<strong>Ok</strong>';    
```

## <span style="color: #26B260">Manipuler le dom : Écouter les évènements du dom</span>

```javascript
    // sélectionné le bouton crée dans la page html.
    const btnEl = document.getElementById('createSquare');
    console.log(btnEl);
    
    const redSquareContainerEl = document.getElementById('redSquare');
    
    // ajouter une écoute d'événemment.
    btnEl.addEventListener('click', function () {
        console.log('click', this);// fait référence à lélément qui à été cliqué.
                
        redSquareContainerEl.appendChild(createSquare());
    });
    // créer une fonction qui crée un élément (div).
    function createSquare() {
        const el = document.createElement('div');
        el.classList.add('square');
        return el;
    }
```

```javascript
    // écouter l'événement de la souris.
    window.addEventListener('mousemove', function (event) {
    console.log(event);
});
```
