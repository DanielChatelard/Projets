
# <span style="color: #26B260">**Déclarer un composant.**</span>

[Sommaire](./00-Sommaire.md)

React.Component
Pour créer un composant il faut qu'on l'appelle comme une balise html.

```javascript
function Compteur() {
    return <h1>Compteur : <span>0</span></h1>
    // création du composant Compteur.
}
    ReactDOM.render(<Compteur/>, document.querySelector(#app));

```

Je peux lui passer des paramètres via props.

```javascript
function Compteur(props) {
    return <h1>Compteur : <span>{props.name}</span></h1>
    // récupération de "Jean"
}
    ReactDOM.render(<Compteur name="Jean"/>, document.querySelector(#app));
```

On peut passer un texte entre la balise ouvrante et fermante.
Ce sera un enfant (children).

```javascript
// Première façon en utilisant une fonction.
function Compteur(props) {
    // pour afficher le texte enfant, il faut le mettre dans une div
    return <div>
        <h1>Compteur : <span>{props.name}</span></h1>
        <p>{props.children}</p>
    </div>
}
    // dès que l'on met du texte entre les balises Compteur, dans les props apparaît children.
    ReactDOM.render(<Compteur name="Jean">Jean est un élève</Compteur>, document.querySelector(#app));
```

```javascript
// Deuxième façon de créer un composant c'est avec une class
function CompteurFn(props) {
    
    return <div>
        <h1>Compteur : <span>{props.name}</span></h1>
        <p>{props.children}</p>
    </div>
}
    class Compteur extends React.Component {
        // et la méthode render()
        render() {
            return <h1>Competeur</h1>
        }
    }
    
    ReactDOM.render(<Compteur name="Jean">Jean est un élève</Compteur>, document.querySelector(#app));
```

passer des paramètres via props.

```javascript
function CompteurFn(props) {
    return <div>
        <h1>Compteur :
            <span>{props.name}</span>
        </h1>
        <p>{props.children}</p>
    </div>
}
    // Deuxième façon de créer un composant c'est avec une class
    class Compteur extends React.Component {
        // this.props.name, récupère la propriété name de Compteur égal à "Jean".
        render() {
            return <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.children}</p>
            </div>
        }
    }
    
    ReactDOM.render(<Compteur name="Jean">Jean est un élève</Compteur>, document.querySelector(#app));
```

Soit on crée un composant avec une fonction, soit avec une class.
