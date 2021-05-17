
# <span style="color: #26B260">**Lists key**</span>

[Sommaire](./00-Sommaire.md)

```jsx

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {nb: props.defaultValue};
    }

    increment() {
        // execute la méthode setState avec la fonction arrow suivante qui prend en paramètre (state) et qui retourne un objet ({nb: state.nb + 1}).
        this.setState((state) => ({nb: state.nb + 1}));
    }

    // Déclarer la méthode reset() va mettre à jour le state en appelant setState qui prend en paramètre une fonction callback qui va retourner un nouvel objet.
    reset() {
        this.setState(() => {
            return {nb: 0};
        })
    }

    // Déclarer la méthode decrement() elle va mettre à jour le nb dans le state.
    decrement() {
        this.setState((state) => {

            if(state.nb >= 1) {
                return {nb: state.nb - 1};
                // ou condition ternaire
                //nb: state.nb >= 1 ? state.nb - 1 : 0
            }
            return 0;
        })
    }

    render() {
        // Déclaration de la variable btnReset
        let btnReset;
        // condition
        if (this.state.nb > 0) {
            <!-- afficher un bouton réinitialiser dans le cas ou mon nombre est supérieur à zéro -->
            btnReset = <button onClick={() => this.reset()}>Réinitialiser</button>
        }

        return <div>
            <h1>{this.props.name}</h1>
            <p>{this.state.nb}</p>
            <!-- condition à la volée avec l'opérateur logique && -->
            {(this.state.nb >= 1) && <button onClick={() => this.decrement()}>Décrémenter</button>}

            <button onClick={this.increment.bind(this)}>Incrémente</button>
            <!-- afficher le btnReset par interpolation grace aux accolades {btnReset}-->
            {btnReset}
        </div>;
    }
}

class Acceuil extends React.Component {
    // initialiser un state
    state = {
        counters : [],
    };
    
    addcounter() {
        let counters = this.state.counters;
        // nombre aléatoire entre 0 et 10
        let defaultValue = Math.round(Math.random() * 10);
        
        counters.push({name: 'Compteur', defaultValue });
        reprendre à 4min50
        this.setState({counter: [...counters]});
    }
    
    render() {
        return <div>
            <button onClick={() => this.addcounter()}>Ajouter un comteur</button>
            <Counter name="Compteur 1" defaultValue={0}/>
        </div>         
                    
    }
}

ReactDOM.render(<Acceuil/>, document.querySelector('#app'));
```

