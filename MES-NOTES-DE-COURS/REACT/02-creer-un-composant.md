
# <span style="color : #26B260">**Créer un nouveau composant.**</span>

[Sommaire](./00-Sommaire.md)

Avec la méthode createElement.

````javascript
// j'enregistre dans la variable title.
const title =  React.createElement('h1', {}, 'Hello Word', 'Jean');

// je rend la variable title avec la méthode render()
ReactDOM.render(title, document.querySelector('#app'));
// j'affiche dans la console.
console.log(title);
````

## React.createElement().

Premier argument son type, h1.

Deuxième argument options.

Les autres arguments qui suivent sont les enfants (props = propriété).

## ReactDOM.render()

Pour afficher l'élément que j'ai créé, il faut utiliser :

ReactDOM avec la méthode render()

En premier argument je met la variable

En deuxième argument je lui dit dans quel élément je veux l'insérer.

Il est conseillé de mettre querySelector
